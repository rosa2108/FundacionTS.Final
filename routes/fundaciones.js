import express from 'express';
import {FundacionRepository} from '../../repositories/fundacion_repository.js'
import {crearFundacionController} from '../controllers/crearFundacionController.js'

const router = express.Router();

/**
 * @openapi
 * /fundaciones:
 *   get:
 *     description: Listar Fundaciones. 
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Not Found
 *
*/
router.get('/', async function(req, res, next) {
    try{
      const response = await (new FundacionRepository().traerFundaciones())
      res.status(200).json(response)
      res.send("Fundaciones "+ response)
    }catch(e){
      res.status(500)
    }
  });


/**
 * @openapi
 * /fundaciones/id:
 *   get:
 *     description: Obtener Usuario por Id.
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 *
*/
router.get('/:id', async function(req,res,next) {
    try{
      const { id } = req.params
      const responseRepo = await (new FundacionRepository().buscarFundacion(id))
      res.send(responseRepo)
      res.status(200).json(responseRepo)
    }catch(e){
      res.status(500)
    }
  }); 


  /**
 * @openapi
 * /fundaciones:
 *   post:
 *     description: Crear Fundacion.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cbu:
 *                 type: string
 *               alias:
 *                 type: string
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string
 * 
 */
router.post('/', (req,res,next) => {
},
async(req,res,next) =>{
    crearFundacionController
  }
)

/**
 * @openapi
 * /fundaciones/id:
 *   delete:
 *     description: Eliminar Fundacion por Id.
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Not Found
 *
*/
router.delete('/:id', async function(req,res,next){
  const {id}= req.params
    const repo = new FundacionRepository()
    try{
      const response = await (repo.eliminar(id))
      res.status(200).json(response)
    }catch(e){
      res.status(500)
      res.send("Error no se pudo eliminar la fundacion")
    }
})

 export default router