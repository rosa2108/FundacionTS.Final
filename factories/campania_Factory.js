import { Campania } from "../models/Campania.js";

export class CampaniaFactory{
    constructor(){
    }

    crear(concepto, pagina){
        //SE REALIZA VALIDACION  PARA QUE O INGRESEN VALORES ERRONES, SI ES EL CASO LO ATRAPA UNA EXCEPCION
        if(!concepto || !pagina){
            throw new Error("CONCEPTO O PAGINA INVALIDA")
        }
        // RETORNA CREACION DE CAMPANIA
        return new Campania(concepto,pagina)
    }

}