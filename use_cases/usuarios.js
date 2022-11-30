import {PersonaRepository} from '../../repositories/persona_repository.js'
import {PersonaFactory} from '../../factories/persona_Factory.js'

class UsuariosUseCase{

    async crear(mail,nombre,apellido,telefono){
        const persona = new PersonaFactory().crearPersonaLogueada(mail,nombre,apellido,telefono)
        throw new Error("Error generado automatico")
        const resRepositorio= new PersonaRepository()
        await resRepositorio.guardar(persona) 
    }
}