import express from "express";
import {registerData,loginData,getbyId,getbyquery,addStudent} from "../controller/authController.js";


const routes =express.Router()

routes.post("/register",registerData);
routes.get("/login",loginData),
routes.get("/linkparams/:user_id",getbyId);
routes.get("/linkquery",getbyquery);
routes.post("/student",addStudent);

export default routes;