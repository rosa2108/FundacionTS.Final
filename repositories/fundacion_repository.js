import {FundacionStorageFactory} from "./stores/factoryFund.js"

export class FundacionRepository{
    //Inicializamos por defecto la el tipo de Storage por defecto "DB"
    constructor(tipo='db'){
        //Traemos la  base a usar para almacenamiento.
        this.storage= new FundacionStorageFactory(tipo).storage()
    }
    //AGREGA A LA BOLSA DE FUNDACIONES UNA NUEVA FUNDACION
    async guardar(fundacion){
        const fundacion2= await this.buscarFundacion(fundacion.getCBU())
        if(fundacion2 == ""){
            this.storage.guardar(fundacion)
        }else{
            throw new Error("Fundacion Registrada")
        }
        
    }
     //TRAER FUNDACIONES
     traerFundaciones(){
       return this.storage.traerFundaciones()
    }

    //VERIFICA EN EL ARRAY SI EXISTE UNA FUNDACION CON ESE CBU Y NOMBRE
    async buscarFundacion(cbu1){
       return await this.storage.buscarEspecifica(cbu1)
    }

    //ELIMINO FUNDACION ESPECIFICA
    async eliminar(cbu1){
       return await this.storage.eliminarFundacion(cbu1)
    }

    //MODIFICAMOS DATO DEL FUNDACION 
    modificarInformacion(cbu, direccion){
        this.storage.actualizarDireccion(cbu,direccion)
    }
}