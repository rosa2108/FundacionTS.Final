import { MongoClient } from "mongodb"
//FUNCION: PERMITE EL ALMACENAMIENTO AUTOMATICO DE LOS REGISTROS EN LA NUBE DE MONGODB
export class FundacionDBStorage{

     constructor(){
        //EN EL CONSTRUCTOR SE ESTABLECE TODO LA NECESARIO PARA HACER LA CONEXION
        this.url = "mongodb+srv://FundacionTS:fundacionts@cluster0.vspqbgt.mongodb.net/?retryWrites=true&w=majority"
        this.dbName="FundacionTS"
        //Trabajamos sobre la coleccion de Fundaciones cargada en MongoDb
        this.collecctionName="fundaciones"
        this.client= new MongoClient(this.url)
        this.connect()
        this.db = this.client.db(this.dbName)
        this.collecction = this.db.collection(this.collecctionName)
    }
    
//REALIZAMOS CONEXION CON MONGODB
async connect(){
    //AL SER UNA FUNCION ASINCRONICA, PARA QUE NO ESTE MARCADO ANEXAMOS PALABRA CLAVE ASYNC A LA FUNCION
    await this.client.connect()                                        
}
/*METODOS DESARROLLADOS EN ESTA CLASE SON OBTENIDOS ESPECIALMENTE DE LA DOCUMENTACION
    https://www.npmjs.com/package/mongodb
*/

//INSERTAMOS OBJETO FUNDACION EN LA COLLECCION DE FUNDACIONES DE LA BASE.
async guardar(fundacion){
    try{
        await this.collecction.insertOne({
            _id: fundacion.getCBU(),
            alias: fundacion.getNombre(),
            nombre: fundacion.getNombre(),
            direccion: fundacion.getDireccion(),
            campanias:fundacion.getCampanias()
        })
    }catch(e){
        console.error("Fundacion Existente")
    }
    
}
//TRAEMOS LAS FUNDACIONES DEL REPO https://www.npmjs.com/package/mongodb
async traerFundaciones(){
    return await this.collecction.find({}).toArray()
}
//BUSCAMOS FUNDACIONES ESPECIFICA POR CBU
async buscarEspecifica(cbuBuscado){
    return await this.collecction.find({"_id": cbuBuscado}).toArray()
}

//ELIMINAR FUNDACION POR CBU
async eliminarFundacion(cbuBuscado){
    //Elimina aquella fundacion que cumpa con la funcion indicada.
    return await this.collecction.deleteOne({"_id":cbuBuscado})
}

//MODIFICAMOS DATO DEL FUNDACION 
async actualizarDireccion(cbuBuscado, direccion1){
    this.collecction.updateOne({
        "_id":cbuBuscado
    },{
        $set:{
            direccion:direccion1
        }
    })
}

}