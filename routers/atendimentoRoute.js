// const Router = require("express").Router();
const {Router} = require("express");
const router = Router();
const atendimentoController = require("../controllers/atendimentoController");

//função da data
const today =new Date();
function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        aa: date.getFullYear().toString().slice(-2),
        aaaa: date.getFullYear()
    };

    return format.replace(/mm|dd|aa|aaaa/gi, matched => map[matched])
};

//get post put delete

router.get("/atendimentos", (req, res) => {
    const listaAtendimentos = atendimentoController.buscar();
    listaAtendimentos
    .then((atendimentos) => res.status(200).json(atendimentos))
    .catch((error) => res.status(400).json(error.message));
});

router.post("/atendimentos", (req, res) => {
    const criadoEm = formatDate(today, "aaaa-mm-dd");
    const alteradoEm = formatDate(today, "aaaa-mm-dd");
    const novoAtendimento = [criadoEm, alteradoEm, req.body];
    console.log(novoAtendimento);
    console.log(formatDate(today, "aaaa-mm-dd"))
    const atendimento = atendimentoController.criar(novoAtendimento);
    atendimento
    .then((atendimentoCriado) => res.status(201).json(atendimentoCriado))
    .catch((error) => res.status(400).json(error.message));
})

router.put("/atendimento/:id", (req, res) => {
    const {id} = req.params;
    const resposta = atendimentoController.alterar(id);
    res.send(resposta);
})

router.delete("/atendimento/:id", (req, res) => {
    const {id} = req.params;
    const resposta = atendimentoController.deletar(id);
    res.send(resposta);
})

module.exports = router;