import { MongoClient } from "mongodb"
//FUNCION: PERMITE EL ALMACENAMIENTO AUTOMATICO DE LOS REGISTROS EN LA NUBE DE MONGODB
export class PersonaDBStorage{

     constructor(){
        //EN EL CONSTRUCTOR SE ESTABLECE TODO LA NECESARIO PARA HACER LA CONEXION
        this.url = "mongodb+srv://FundacionTS:fundacionts@cluster0.vspqbgt.mongodb.net/?retryWrites=true&w=majority"
        this.dbName="FundacionTS"
        this.collecctionName="personas"
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

//INSERTAMOS OBJETO PERSONA EN LA COLLECCION DE PERSONAS DE LA BASE.
async guardar(persona){
    //Metodo insertOne, nos permite insertan un registro a la vez.
    try{
        await this.collecction.insertOne({
            _id:persona.getMail(), //SE ESTABLECE COMO VALOR UNICO ID = MAIL
            nombre: persona.getNombre(),
            apellido: persona.getApellido(),
            telefono: persona.getTelefono(),
            registrado: true
         })  
    }catch(e){
        print (e);
    } 
}

//TRAEMOS A LAS PERSONAS DEL REPOhttps://www.npmjs.com/package/mongodb
async traerPersonas(){
    return await this.collecction.find({}).toArray()
}

//BUSCAMOS PERSONA ESPECIFICA POR MAIL
 async buscarPersona(mailNuevo){
    //Este metodo permite buscar en el array de elementos por clave identificatoria "mail"
    return await this.collecction.find({"_id":mailNuevo}).toArray()
}

//ELIMINAR PERSONA POR MAIL
async eliminarPersona(mailNuevo){
    return await this.collecction.deleteOne({"_id":mailNuevo})
}

//MODIFICAMOS DATO DEL USUARIO 
async actualizarTelefono(mailNuevo, telefonoNuevo){
    this.collecction.updateOne({
        "_id":mailNuevo
    },{
        $set:{
            "telefono": telefonoNuevo
        } 
    })
}

}