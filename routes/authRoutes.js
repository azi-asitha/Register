import express from "express";
import {registerData,loginData,getbyId,getbyquery,addStudent} from "../controller/authController.js";


const routes =express.Router()

routes.post("/register",registerData);
routes.get("/login",loginData),
routes.get("/linkparams/:user_id",getbyId);
routes.get("/linkquery",getbyquery);
routes.post("/student",addStudent);

export default routes;

//POST http://localhost:3000/api/auth/register
//POST http://localhost:3000/api/auth/login
//GET http://localhost:3000/api/auth/linkparams/101
//GET http://localhost:3000/api/auth/linkquery?name=Ravi
//GET http://localhost:3000/api/auth/linkquery?name=Ravi
