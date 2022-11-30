export class Persona{
    constructor(mail,nombre,apellido,telefono){
        this.mail=mail //COMO MINIMO DEBE INGRESAR MAIL PARA VISUALIZAR LA APLICACION
        this.nombre= nombre //USUARIO LOGUEADO
        this.apellido= apellido //USUARIO LOGUEADO
        this.telefono=telefono //USUARIO LOGUEADO
        this.registrado=false
    }

    revisarCampania(){
        return this.revisando= true
    }

    setRegistrado(estado){
        this.resgistrado= estado
    }
    
    setTelefono(valor){
        this.telefono= valor
    }

    getMail(){
        return this.mail
    }

    getNombre(){
        return this.nombre
    }
    
    getApellido(){
        return this.apellido
    }

    getTelefono(){
        return this.telefono
    }
}