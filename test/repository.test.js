import { PersonaFactory } from '../factories/persona_Factory.js'
import { PersonaRepository } from '../repositories/persona_repository.js'
import { FundacionRepository } from '../repositories/fundacion_repository.js'
import { FundacionFactory } from '../factories/fundacion_factory.js'
import { CampaniaRepository } from '../repositories/campania_repository.js'
import { CampaniaFactory} from '../factories/campania_Factory.js'

//CREACION Y GUARDADO DE PERSONA
describe("PERSONA", () => {
    let repositorio
    let persona1
    let persona2
    let persona3
    let persona4
    beforeEach(() => {
        //Creamos Repositorio -> Contendra a las personas que usen la APP
        repositorio = new PersonaRepository('db')
        persona1 = new PersonaFactory().crearPersonaLogueada("Pedro.rodriguez@gmail.com","Pedro", "Rodriguez", "1154253698")
        persona2 = new PersonaFactory().crearPersonaLogueada("JuanHidalgo@gmail.com","Juan", "Hidalgo", "11542588698")
        persona3= new PersonaFactory().crearPersonaLogueada( "JuanHidalgo@gmail.com","Juan", "Perez", "11542588698")
        persona4= new PersonaFactory().crearPersonaLogueada( "marianaguzman@gmail.com","Mariam", "Guzman", "11111111111")
    })

    describe("#constructor()", () => {
       describe("Datos Validos", () => {
            it("Creamos persona en Repositorio", () => {
                //CREAMOS PERSONA 1. PRUEBA: AGREGADO A MONGODB - OK
                //Agregamos Persona a Repositorio
                repositorio.guardar(persona1)
            })
        })
        
        describe("Datos Validos", () => {
            it("Creamos persona en Repositorio", () => {
                //CREAMOS PERSONA 2. PRUEBA: AGREGADO A MONGODB - OK
                //Agregamos Persona a Repositorio
                repositorio.guardar(persona2)
                
            })
        })

        describe("Datos Validos", () => {
            it("Creamos persona en Repositorio", () => {
                //CREAMOS PERSONA 3. PRUEBA: AGREGADO A MONGODB - OK
                //Agregamos Persona a Repositorio
                repositorio.guardar(persona3)
            })
        })

        describe("Datos Validos", () => {
            it("Creamos persona en Repositorio", () => {
                //CREAMOS PERSONA 4. PRUEBA: AGREGADO A MONGODB - OK
                //Agregamos Persona a Repositorio
                repositorio.guardar(persona4)
            })
        })
    })

        describe("Testing de Metodos: ", () => {
        //USUARIO COMUN
        describe("#eliminarPersona()", () => {
            it("Persona Eliminada", async () => {
                //ELIMINAR PERSONA 1. PRUEBA: ELIMINACION DE PERSONA DE MONGODB POR MAIL - OK
                const persona = await repositorio.eliminarPersona("Pedro.rodriguez@gmail.com")
            })
        })


       /describe("#modificarInformacion()", () => {
            it("Informacion Modificada(Telefono)", () => {
                //Modificamos Telefono Usuario
                repositorio.modificarInformacion("JuanHidalgo@gmail.com", "2222222222")
            })
        })

        //BUSCAR PERSONA ESPECIFICA
        describe("#buscarUsuario()", () => {
            it("Usuario Ubicado", async () => {
                const persona = await repositorio.buscarPersona("JuanHidalgo@gmail.com")
                console.log(persona)
            })
        }) 

        //TRAE LISTADO DE MONGO DB
        describe("#listarUsuarios()", () => {
            it("Usuarios Registrados", async () => {
                const personas = await repositorio.traerPersonas()
                console.log(personas)
            })
        })
    })
})



//CREACION Y GUARDADO DE FUNDACION
describe("FUNDACION",()=> {
    let repositorioF
    let fundacion1
    let fundacion2
    let fundacion3
    beforeEach(() => {
        //Creamos Repositorio -> Contendra a las fundaciones que usen la APP
        repositorioF = new FundacionRepository('db')
        //Creamos Fundacion -> Usara para el total del test
        fundacion1 = new FundacionFactory().crearFundacion("21546987123","FUN.CAPA.PELOTA","Planeta Limpio","Av. Santa Fe 124")
        fundacion2 = new FundacionFactory().crearFundacion("15246265613","CAN.CAPA.PELOTA","Mundo Ideal","Belgrano 124")
        fundacion3 = new FundacionFactory().crearFundacion("15246265613","MAR.SOL.CAMISA","Planet","Av. del  Libertador 3000")
    })

    describe("#constructor()",() => {
        describe("Datos Validos" ,() => {
            it("Creamos Fundacion en Repositorio", () => {
                //Agregamos fundacion a Repositorio
                repositorioF.guardar(fundacion1)
            })
        })

        describe("Datos Validos" ,() => {
            it("Creamos Fundacion en Repositorio", () => {
                //Agregamos fundacion a Repositorio 
                repositorioF.guardar(fundacion2)
            })
        })
        //NO SE CARGO DEBIDO A LA BASE  - CBU REPETIDO
        describe("Datos Validos" ,() => {
            it("Creamos Fundacion en Repositorio", () => {
                //Agregamos fundacion a Repositorio -- FUNDACION CON CBU REPETIDO
                repositorioF.guardar(fundacion3)
            })
        })
    })

    describe("Testing de Metodos: ",() =>{
        describe("#eliminarFundacion()",() => {
            it("Fundacion Eliminada",()=> {
               //Eliminamos Fundacion del Repositorio
                repositorioF.eliminar("21546987123")
            })
        })

        describe("#modificarInformacion()",() => {
            it("Informacion Modificada(Direccion)",() => {
                //Modificamos Direccion de Fundacion
                repositorioF.modificarInformacion("15246265613", "Cabildo 2222")
            })
        })
    
       //TRAE LISTADO DE MONGO DB
        describe("#listarFundaciones()",() =>{
            it("Fundaciones Registradas",async() => {
                const fundListadas = await repositorioF.traerFundaciones()
                console.log(fundListadas)
            })
        })
    }) 

})


//CREACION Y GUARDADO DE PERSONA
describe("CAMPANIA", () => {
    let repositorio
    let campaniaNueva
    let campania2
    beforeEach(() => {
        //Creamos Repositorio -> Contendra a las personas que usen la APP
        repositorio = new CampaniaRepository()
        campaniaNueva = new CampaniaFactory().crear("Limpieza Mundial","www.limpiezaMundial.com.ar")
        campania2 = new CampaniaFactory().crear("Vida Sustentable", "Vidasustentable@hotmai.com")
    })

    describe("#constructor()", () => {
        describe("Datos Validos", () => {
            it("Creamos campania en Repositorio", () => {
                //CREAMOS CAMPANIA 1. PRUEBA: AGREGADO A MONGODB - OK
                //Agregamos campania a Repositorio
                repositorio.guardar(campaniaNueva)
            })
        })
    })

    describe("#constructor()", () => {
        describe("Datos Validos", () => {
            it("Creamos campania en Repositorio", () => {
                //CREAMOS CAMPANIA 1. PRUEBA: AGREGADO A MONGODB - OK
                //Agregamos campania a Repositorio
                repositorio.guardar(campania2)
            })
        })
    })
})  


