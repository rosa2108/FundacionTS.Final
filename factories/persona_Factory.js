import { Persona } from "../models/Persona.js"

export class PersonaFactory{
    constructor(){
    }
    //CREAR PERSONA LOGUEADA
    crearPersonaLogueada(mail,nombre,apellido,telefono){
        if(mail == null){
            throw new Error("NOMBRE INVALIDOS")
        }
        return new Persona(mail,nombre,apellido,telefono)
    }

   
}