const express = require("express");
const userRoute = express();

userRoute.use(express.json());

userRoute.use(express.urlencoded({ extended: true }));
const userController= require("../controller/controller")
userRoute.post("/item",userController.createItem)
userRoute.get("/getItem",userController.getItem)
userRoute.get("/getSpecific/:id",userController.getSpecific)
userRoute.delete("/getDelete/:id",userController.deletItem)
userRoute.put("/getUpdate/:id",userController.updateItem)
module.exports=userRoute