import { CampaniaFactory } from '../factories/campania_Factory.js';
import chai from 'chai'

//TENER DISPONIBLE EXPECT DEL MODULO CHAI
const expect= chai.expect
/*
describe("CAMPANIA ", () => {

    let campania
    beforeEach(() => {
        campania = new CampaniaFactory().crear("Conservacion del Medio Ambiente","universoLimpio@gmail.com") 
    })

    describe("#Constructor", () => {
        describe("Datos Validos", () => {
            it("creaCampania()", () => {
                expect(campania).to.have.property('concepto').with.equal("Conservacion del Medio Ambiente")
                expect(campania).to.have.property('pagina').with.equal("universoLimpio@gmail.com")
            }) 
        })
    })

    describe("#Metodos",()=>{

        describe("obtenerConcepto()",() => {
            it("ConceptoCampania",() => {
                const concepto = campania.conceptoCamp()
                expect(concepto).to.be.a('string')
            })
        })

        describe("obtenerPagina()", () => {
            it("PaginaCampania",() =>{
                const pagina= campania.paginaCamp()
                expect(pagina).to.be.a('string')
            })
        })

        describe("estaActiva()",() => {
            it("Esta activa la Campania",() => {
                campania.estaActiva()
                expect(campania).to.have.property('activa').with.equal(true)
            })
        })

    })


})*/