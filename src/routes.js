const multer = require ('multer')
const uploadConfig = require ('./config/upload')

const express = require('express');

const UserSessionController = require ('./controllers/UserSessionController')
const SpotController = require ('./controllers/SpotController')
const Dashboard = require ('./controllers/DashboardController')
const Reserv = require ('./controllers/ReservController')

const routes = express.Router();
const upload = multer (uploadConfig)

routes.post('/usersessions',UserSessionController.create);
routes.post('/spots', upload.single('image'), SpotController.create);
routes.get('/spots', SpotController.list)
routes.get('/dashboard', Dashboard.listshow)

routes.post('/spots/:spot_id/reservs',Reserv.create) 

module.exports = routes;