import { Fundacion } from "../models/Fundacion.js";

export class FundacionFactory{
    constructor(){
    }

    crearFundacion(cbu,alias,nombre,direccion){
        //VERIFICAMOS QUE EL CBU Y NOMBRE SEAN VALIDOS
        if(cbu == null ){
            throw new Error("CBU DE LA FUNDACION INVALIDO")
        }else{
            if(nombre == null){
                throw new Error("NOMBRE DE LA FUNDACION INVALIDO")
            }
        }
        //RETORNA CREACION DE LA PERSONA
        return new Fundacion(cbu,alias,nombre,direccion)
    }

}