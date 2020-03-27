const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController')

routes.post('/sessions', sessionController.create)
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);
routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);
routes.get('/profile', profileController.index);


module.exports = routes;

//* métodos:
//* Get: bussca informação no backend
//* post: cria info
//* put: altera info
//* delete: deleta indo

//*parametros
//*query params: parametros nomeados enviados na rota depois de ?
//*route params: utilizados para identifivar recursos
//*request body:corpo da requisição, criar ou alterar recursos