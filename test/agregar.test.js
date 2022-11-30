import assert,{AssertionError} from "assert";
import chai from "chai";
import { Agregar } from "../commands/agregar.js";
import { CampaniaFactory } from "../factories/campania_Factory.js";
import { FundacionFactory } from "../factories/fundacion_factory.js";
import { Campania } from "../models/Campania.js";
import { Fundacion } from "../models/Fundacion.js";


const expect = chai.expect

describe("Agregar Campana", () => {
    describe("#agregar()", () => {
        it("Crea una campana para la fundacion", () => {
            //ARRANGE
            const fundacion1 = new FundacionFactory().crearFundacion("15246265613","CAN.CAPA.PELOTA","Mundo Ideal","Cabildo 2222") 
            const campania1= new CampaniaFactory().crear("Limpieza Mundial","www.limpiezaMundial.com.ar")
            const agregar = new Agregar(fundacion1,campania1) 

            agregar.ejecutar() 
        })

        /*it("No crea Campana, Concepto o Pagina Invalida", () => {
            //ARRANGE
             const fundacion = new FundacionFactory().crearFundacion("123456789","FLOR.MIRA.HUESO","Fundacion ProVerde","Av Francisco Fajardo, 1250")
             const agregar = new Agregar(Fundacion,"Invernadero","mundo@gmail.com")

             expect(fundacion.campanias().length).to.equal(1)
             
             //ACT
             const camp2 = new Campania("Green" ,"efectoInvernadero@gmail.com")
             fundacion.agregarCampania(camp2) //PRUEBA AGREGAR UAN 1RA CAMPANIA
                //CALLBACK
             const campaniaCreadora = () => {
                agregar.ejecutar() //AL EJECUTAR POR METODO INTERNO AGREGAR UNA SEGUNDA CAMPANIA - CON AMBOS IDENTIFICATORIOS
             }
             
             //ASSERT
             expect(campaniaCreadora).to.throw(Error)
             expect(fundacion.campanias().length).to.equal(1)

        })*/
    })
})