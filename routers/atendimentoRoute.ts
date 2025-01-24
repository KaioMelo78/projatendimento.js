// const { Router } = require("express");
import { Router } from "express";
const router = Router();
// const atendimentoController = require("../controllers/atendimentoController");
import atendimentoController from "../controllers/atendimentoController.js";

//get post put delete

router.get("/atendimentos", atendimentoController.buscar);

router.post("/atendimentos", atendimentoController.criar);

router.put("/atendimento/:id", atendimentoController.atualizar);

router.delete("/atendimento/:id", atendimentoController.deletar);

module.exports = router;
