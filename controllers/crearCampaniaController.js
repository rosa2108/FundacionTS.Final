export const crearCampaniaController = async (req,res,next) =>{

    req.body = {concepto,pagina};
    const campania = req.body;
    let responseObject= {};
  
   try{
        responseObject = await (new CampaniaUseCase()).crear(campania)
        res.status(201).json(responseObject)
   }catch(e){
        responseObject = {e: e.message}
        res.status(500).json({ message: e.message})
   }
}