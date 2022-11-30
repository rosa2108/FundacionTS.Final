import pkg from 'http-errors';
const {createError} = pkg; 
import express from 'express'; //Trae a express del modulo de node
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import personasRouter from './routes/personas.js'
import fundacionesRouter from './routes/fundaciones.js'
import campaniasRouter from './routes/campanias.js'

const app = express(); 

//INFORMA QUE LO QUE DEVUELVE ES JSON
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

//FUNDACION TS 
//ASOCIO A LA RUTA PERSONA  - CALLBACK "PERSONA ROUTER"
//app.use('/:id',personasRouter) //TRAEMOS UNA PERSONA EN ESPECIFICO POR MAIL
app.use('/personas', personasRouter)
app.use('/fundaciones',fundacionesRouter)
app.use('/campanias',campaniasRouter)

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Api Fundacion TS',
      version: '1.0.0',
    },
  },
  apis: ['./routes/personas.js','./routes/fundaciones.js','./routes/campanias.js'], // Array de cadenas se  pueden especificar mas de una
};

const openapiSpecification = swaggerJsdoc(options); //VERSION JAVASCRIPT DEL PROYECTO
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification)) //VERSION HTML DEL PROYECTO 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  res.json({error: err})
});

app.listen(5000)


export default app
