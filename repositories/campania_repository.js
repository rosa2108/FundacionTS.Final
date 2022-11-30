import { CampaniaDBStorage } from "../repositories/stores/campania_db_storage.js"


export class CampaniaRepository{
    //Inicializamos por defecto la el tipo de Storage por defecto "DB"
    constructor(){
        this.storage= new CampaniaDBStorage()
    }

    async guardar(campania){
        const buscada = await this.buscarCampania(campania.getConcepto())
        if(buscada == ""){
            this.storage.guardar(campania)
        }else{
            throw new Error("Campania Registrada")
        }
    }

    guardarCampFundacion(fundacion,campania){
        const lista= fundacion.getCampanias()
        const buscada = fundacion.buscarCampania(campania.getConcepto())
        if(buscada == ""){
            lista.push(campania)
        }else{
            console.log("Campania Existente")
        }
    }

     //BUSCAMOS PERSONA ESPECIFICA POR MAIL EN EL STORAGE INDICADO
     async buscarCampania(concepto){
        return await this.storage.buscarCampania(concepto)
     }
    

     async traerCampanias(){
        return await this.storage.traerCampanias()
    }

    //ELIMINO CAMPANIA ESPECIFICA
    async eliminar(concepto){
        return await this.storage.eliminar(concepto)
     }
}