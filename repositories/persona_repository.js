import { PersonaStorageFactory } from "./stores/factory.js"


export class PersonaRepository{
    //ALMACENAMIENTO DE DATOS
    //PARAMETRO POR DEFAULT, SI EL MISMO NO ESPECIFICADO TOMARA POR DEFAULT BD
    constructor(tipo='db'){ 
        this.storage= new PersonaStorageFactory(tipo).storage()
    }
    
    //GUARDAMOS A LA  PERSONA EN NUESTRO REPOSITORIO DE ACUERDO AL TIPO RECIBIDO
    async guardar(persona){
        //Trae a la persona si existe en bd
        const personaBus = await this.buscarPersona(persona.getMail())
        //Si la persona es igual a vacio se guarda en BD
        if( personaBus == ""){
            this.storage.guardar(persona)
        }else{
            throw new Error("Persona Registrada.")
        }  
    }

    //TRAEMOS A LAS PERSONAS DEL REPOSITORIO INDICADO
    traerPersonas(){
        return this.storage.traerPersonas()
    }

    //BUSCAMOS PERSONA ESPECIFICA POR MAIL EN EL STORAGE INDICADO
    async buscarPersona(mailNuevo){
       return await  this.storage.buscarPersona(mailNuevo)
    }

    //ELIMINAR PERSONA POR MAIL
     async eliminarPersona(mailNuevo){
        return await this.storage.eliminarPersona(mailNuevo)
    }

    //MODIFICAMOS DATO DEL USUARIO 
    modificarInformacion(mail,telfNuevo){
        this.storage.actualizarTelefono(mail,telfNuevo)
    }
    
}