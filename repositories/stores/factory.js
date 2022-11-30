//PARA DESARROLLAR EL METODO STORAGE NECESITO IMPORTAR LAS REFERENCIA A LOS STORAGE ACTUALES
import { PersonaArrayStorage } from "./personas_array_storage.js"
import { PersonaDBStorage } from "./persona_db_storage.js"


export class PersonaStorageFactory{
    //ESTA CLASE REPRESENTA LA CONEXION ENTRE PERSONA.REPOSITORY Y LOS STORAGE A USAR
    //UNICAMENTE CONTIENE UN CONSTRUCTOR QUE RECIBE "tipo", ESTO HACE REFERENCIA AL TIPO DE STORAGE A USAR 
    constructor(tipo){
        this.tipo =tipo
    }

    storage(){
        if(this.tipo ='db') return new PersonaDBStorage
        if(this.tipo = 'array') return new PersonaArrayStorage
        throw new Error ("El Tipo no existe: "+this.tipo)
    }
}