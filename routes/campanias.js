import express from 'express';
import {CampaniaRepository} from '../../repositories/campania_repository.js'
import {crearCampaniaController} from '../controllers/crearCampaniaController.js'

const router = express.Router();

/**
 * @openapi
 * /campanias:
 *   get:
 *     description: Listar Campanias. 
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Not Found
 *
*/
router.get('/', async function(req, res, next) {
    try{
      const response = await (new CampaniaRepository().traerCampanias())
      res.status(200).json(response)
      res.send("Campanias "+ response)
    }catch(e){
      res.status(500)
    }
  });


/**
 * @openapi
 * /campanias/id:
 *   get:
 *     description: Obtener Campania por Id.
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
      const responseRepo = await (new CampaniaRepository().buscarCampania(id))
      res.send(responseRepo)
      res.status(200).json(responseRepo)
    }catch(e){
      res.status(500)
    }
  }); 

  /**
 * @openapi
 * /campanias:
 *   post:
 *     description: Crear Campania.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               concepto:
 *                 type: string
 *               pagina:
 *                 type: string
 * 
 */
router.post('/', (req,res,next) => {
  },
    async(req,res,next) =>{
      crearCampaniaController
  }
)

router.delete('/:id', async function(req,res,next){
  const {id}= req.params
    const repo = new CampaniaRepository()
    try{
      const response = await (repo.eliminar(id))
      res.status(200).json(response)
    }catch(e){
      res.status(500)
      res.send("Error no se pudo eliminar la campania indicada")
    }
})



 export default router