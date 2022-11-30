export const crearUsuarioController = async (req,res,next) => {
     
    req.body = {mail,nombre,apellido,telefono};
    const usuario = req.body;
    let responseObject= {};
  
   try{
        responseObject = await (new UsuariosUseCase()).crear(usuario)
        res.status(201).json(responseObject)
   }catch(e){
        res.status(500)
        res.send("Error: Usuario no creado")
   }
}