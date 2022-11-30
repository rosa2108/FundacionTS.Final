import { MongoClient } from "mongodb"
//FUNCION: PERMITE EL ALMACENAMIENTO AUTOMATICO DE LOS REGISTROS EN LA NUBE DE MONGODB
export class CampaniaDBStorage{

     constructor(){
        //EN EL CONSTRUCTOR SE ESTABLECE TODO LA NECESARIO PARA HACER LA CONEXION
        this.url = "mongodb+srv://FundacionTS:fundacionts@cluster0.vspqbgt.mongodb.net/?retryWrites=true&w=majority"
        this.dbName="FundacionTS"
        //Trabajamos sobre la coleccion de Fundaciones cargada en MongoDb
        this.collecctionName="campanias"
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

    //INSERTAMOS OBJETO CAMPANIA EN LA COLLECCION DE CAMPANIAS DE LA BASE.
    async guardar(campania){
    //Metodo insertOne, nos permite insertan un registro a la vez.
    await this.collecction.insertOne({
        "_id": campania.getConcepto(),
        pagina: campania.getPagina(),
        registrada: true
    })
    }

    //BUSCAR CAMPANIA POR CONCEPTO
    async buscarCampania(concepto){
        return await this.collecction.find({"_id":concepto}).toArray()
    }

    //TRAER CAMPANIAS
    async traerCampanias(){
        return await this.collecction.find({}).toArray()
    }

    //ELIMINAR CAMPANIA POR CONCEPTO
    async eliminar(concepto){
    return await this.collecction.deleteOne({"_id":concepto})
}

}