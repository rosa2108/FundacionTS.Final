import express from 'express';
import {PersonaRepository} from '../../repositories/persona_repository.js'
import {crearUsuarioController} from '../controllers/usuarioController.js'

const router = express.Router();

/**
 * @openapi
 * /usuarios:
 *   get:
 *     description: Listar Usuarios de la base. 
 *     responses:
 *       204:
 *         description: OK
 *       500:
 *         description: Not Found
 *
*/
router.get('/', async function(req, res, next) {
  try{
    const response = await (new PersonaRepository().traerPersonas())
    res.status(200).json(response)
    res.send("Clientes Fundacion TS "+ response)
  }catch(e){
    res.status(500)
  }
});


/**
 * @openapi
 * /usuarios/id:
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
  const { id } = req.params
  try{
    const responseRepo = await (new PersonaRepository().buscarPersona(id))
    res.send(responseRepo)
    res.status(200).json(responseRepo)
  }catch(e){
    res.status(500)
    res.send("Usuario Inexistente")
   
  }
}); 

/**
 * @openapi
 * /usuarios:
 *   post:
 *     description: Crear Usuario.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mail:
 *                 type: string
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               telefono:
 *                 type: string
 * 
 */
 router.post('/', async (req,res,next) => {
},
async(req,res,next) =>{
    crearUsuarioController
  }
)

/**
 * @openapi
 * /usuarios/id:
 *   delete:
 *     description: Eliminar Usuario por Id.
 *     responses:
 *       204:
 *         description: OK
 *       500:
 *         description: Not Found
 *
*/
router.delete('/:id', async function(req,res,next){
  const {id}= req.params
    const repo = new PersonaRepository()
    try{
      const response = await (repo.eliminarPersona(id))
      res.status(200).json(response)
    }catch(e){
      res.status(500)
      res.send("Error no se pudo eliminar el usuario")
    }
})

export default router