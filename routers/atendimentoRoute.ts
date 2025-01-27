// const { Router } = require("express");
import { Router } from "express";
const router = Router();
import atendimentoController from "../controllers/atendimentoController";

//get post put delete

router.get("/atendimentos", atendimentoController.buscar);

router.post("/atendimentos", atendimentoController.criar);

router.put("/atendimento/:id", atendimentoController.atualizar);

router.delete("/atendimento/:id", atendimentoController.deletar);

export default router;
