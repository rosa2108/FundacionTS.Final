import {Campania} from "../models/Campania.js"

export class Agregar {
    //RECIBE UNA FUNDACION POR PARAMETRO LA CUAL HARA USO DE UN METODO INTERNO DE LA CLASE
   constructor(fundacion,campania){
    this.fundacion = fundacion
    this.campania = campania
   }
  
   
   buscarCampania(){
   const listaCampanias= this.fundacion.getCampanias()
   const buscada = listaCampanias.find((elemento) =>(elemento.concepto == this.campania.getConcepto()))
   }

   ejecutar(){
        const buscada = this.buscarCampania(this.campania) 
        // PROBADO!!!! - TRAE RETORNO UNDEFINED PORQUE NO LA ENCUENTRA
        if(buscada == undefined){
            const nueva = new Campania(this.campania.getConcepto(),this.campania.getPagina())
            this.fundacion.agregarCampania(nueva)
        }else{
            throw new Error ("Campania Existente")
         }
   }
    
}