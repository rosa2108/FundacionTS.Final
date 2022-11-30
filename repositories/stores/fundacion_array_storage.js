export class FundacionArrayStorage{
    constructor(){
        //ALMACENAMIENTO INTERNO DE FUNDACIONES
        this.fundaciones= []
    }

    //AGREGA A LA BOLSA DE FUNDACIONES UNA NUEVA FUNDACION
    guardar(fundacion){
        this.fundaciones.push(fundacion)
    }

     //TRAER FUNDACIONES
     traerFundaciones(){
        return this.fundaciones
    }

    //VERIFICA EN EL ARRAY SI EXISTE UNA FUNDACION CON ESE CBU Y NOMBRE
    buscarEspecifica(cbu1){
       const buscada = this.fundaciones.find(fund => (fund.cbu == cbu1))
        return buscada
    }

    //MODIFICAMOS DATO DEL FUNDACION 
    actualizarDireccion(cbu, direccion){
     const fundacion = this.buscarEspecifica(cbu)
        if(fundacion!= null){
            fundacion.setDireccion(direccion)
        }
    }
}
