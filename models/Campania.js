export class Campania{
    constructor(concepto,pagina){
        this.concepto=concepto
        this.pagina=pagina
        this.activa=false
        this.registrada= false
    }
    getConcepto(){
        return this.concepto
    }

    getPagina(){
        return this.pagina
    }

    getRegistro(){
        return this.registrada
    }
    //INDICA SI LA CAMPANA SE ENCUENTRA ACITVA ACTUALMENTE (BOOLEANO)
    estaActiva(){
        return this.activa=true
    }
}