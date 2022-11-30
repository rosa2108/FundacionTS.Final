
export class PersonaArrayStorage{
    constructor(){
        //EL ALMACENAMIENTO SE REALIZA EN UN ARRAY INTERNO
        this.personas=[]
    }
    
//GUARDAMOS A LA  PERSONA EN NUESTRO ARRAY INTERNO
guardar(persona){
    this.personas.push(persona)
}

//TRAEMOS A LAS PERSONAS DEL ARRAY
traerPersonas(){
    return this.personas
}

//BUSCAMOS PERSONA ESPECIFICA POR MAIL
buscarPersona(mailNuevo){
    return this.personas.find(per => (per.mail == mailNuevo))
}

//ELIMINAR PERSONA POR MAIL
eliminarPersona(mailNuevo){
    //GENERAMOS UN ARRAY CON TODOS LOS ELEMENTOS QUE CUMPLAN LA CONDICION
    //CASO: ELIMINARA DEL ARRAY AQUEL O AQUELLOS VALORES QUE SEAN IGUAL A LOS PASADOS POR PARAMETRO
    return this.personas.filter(per => (per.mail !== mailNuevo))
}

//ACTUALIZAR REGISTRO
actualizarRegistro(persona){
    persona.setRegistrado(true)
}

//MODIFICAMOS DATO DEL USUARIO 
actualizarTelefono(mail,telefono){
    const persona1= this.buscarPersona(mail)
    if(persona1!= null){
        persona1.setTelefono(telefono)
    }
}

//ACTUALIZAR REGISTRO
actualizarRegistro(mail){
    const persona2 = this.buscarPersona(mail)
    if(persona2!= null){
        persona2.setRegistrado(true)
    }
}

}