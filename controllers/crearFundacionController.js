export const crearFundacionController = async (req,res,next) =>{

    req.body = {cbu,alias,nombre,direccion};
    const fundacion = req.body;
    let responseObject= {};
  
   try{
        responseObject = await (new FundacionUseCase()).crear(fundacion)
        res.status(201).json(responseObject)
   }catch(e){
        responseObject = {e: e.message}
        res.status(500).json({ message: e.message})
   }
}