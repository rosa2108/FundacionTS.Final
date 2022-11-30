import {CampaniaRepository} from '../../repositories/campania_repository.js'
import {CampaniaFactory} from '../../factories/campania_Factory.js'

class CampaniaUseCase{

    async crear(concepto,pagina){
        const campania = new CampaniaFactory().crear(concepto,pagina)
        throw new Error("Error generado automatico")
        const resRepositorio= new CampaniaRepository()
        await resRepositorio.guardar(campania)
    }

}