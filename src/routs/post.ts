import { Router } from "express";

const router = Router();

router.get("/posts", (req,res)=>{
    res.send({data: "respuesta"})
})

export {router};