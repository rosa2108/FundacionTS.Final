import {FundacionRepository} from '../../repositories/fundacion_repository.js'
import {FundacionFactory} from '../../factories/fundacion_factory.js'

class FundacionUseCase{

    async crear(cbu,alias,nombre,direccion){
        const fundacion = new FundacionFactory().crearFundacion(cbu,alias,nombre,direccion)
        throw new Error("Error generado automatico")
        const resRepositorio= new FundacionRepository()
        await resRepositorio.guardar(fundacion)
    }

    async eliminar(cbu){
        return await (new FundacionRepository().eliminar(cbu))
    }
}