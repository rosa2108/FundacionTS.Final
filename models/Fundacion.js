//CREACION DE FUNDACION
import { CampaniaRepository } from "../repositories/campania_repository.js"

export class Fundacion{
    constructor(cbu,alias,nombre,direccion){
        //SE EVALUA SOLO ESTOS DATOS AL SER OBLIGATORIOS PARA LA CREACION DE CUALQUIER FUNDACION
       if(!cbu || !nombre){
            throw new Error
        }
        this.cbu= cbu
        this.alias= alias
        this.nombre= nombre
        this.direccion= direccion
        this.campanias= []
    }

    obtenerRepoDBCampanias(){
        return new CampaniaRepository()
    }

    getCBU(){
        return this.cbu
    }

    getAlias(){
        return this.alias
    }

    getNombre(){
        return this.nombre
    }

    getDireccion(){
        return this.direccion
    }
    
    //CAMPAÑAS QUE COMPONEN LA FUNDACION
    getCampanias(){
        return this.campanias
    }

    cantCampanias(){
        return this.campanias().length
    }

     buscarCampania(concepto1){
        const buscada = this.campanias.find(ele => (ele.concepto == concepto1))
         return buscada
     }
    
     agregarCampania(campaniaNueva){
        this.campanias.push(campaniaNueva)
    }

    //SET PARA MODIFICAR DIRECCION
    setDireccion(direccionNueva){
        this.direccion = direccionNueva
    }

}



