//PARA DESARROLLAR EL METODO STORAGE NECESITO IMPORTAR LAS REFERENCIA A LOS STORAGE ACTUALES
import { FundacionDBStorage } from "./fundacion_db_storage.js"
import { FundacionArrayStorage } from "./fundacion_array_storage.js"


export class FundacionStorageFactory{
    //ESTA CLASE REPRESENTA LA CONEXION ENTRE FUNDACION.REPOSITORY Y LOS STORAGE A USAR
    //UNICAMENTE CONTIENE UN CONSTRUCTOR QUE RECIBE "tipo", ESTO HACE REFERENCIA AL TIPO DE STORAGE A USAR 
    constructor(tipo){
        this.tipo =tipo
    } 

    storage(){
        if(this.tipo ='db') return new FundacionDBStorage
        if(this.tipo = 'array') return new FundacionArrayStorage
        throw new Error ("El Tipo no existe: "+this.tipo)
    }
}