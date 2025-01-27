import atendimentoModel from "../models/atendimentoModel";

// const atendimentoModel = require("../models/atendimentoModel")
class atendimentoController {
  buscar(req: any, res: any) {
    const listaAtendimentos = atendimentoModel.listar();
    listaAtendimentos
      .then((atendimentos: any) => res.status(200).json(atendimentos))
      .catch((error: any) => res.status(400).json(error.message));
  }
  criar(req: any, res: any) {
    const novoAtendimento = req.body;
    const atendimento = atendimentoModel.criar(novoAtendimento);
    atendimento
      .then((atendimentoCriado: any) => res.status(201).json(atendimentoCriado))
      .catch((error: any) => res.status(400).json(error.message));
  }
  atualizar(req: any, res: any) {
    const { id } = req.params;
    const atendimentoAtualizado = req.body;
    const atendimento = atendimentoModel.atualizar(atendimentoAtualizado, +id);
    atendimento
      .then((resultAtendimentoAtualizado: any) => res.status(200).json(resultAtendimentoAtualizado))
      .catch((error: any) => res.status(400).json(error.message));
  }
  deletar(req: any, res: any) {
    const { id } = req.params;
    const atendimento = atendimentoModel.deletar(+id);
    atendimento
      .then((resultAtendimentoDeletado: any) => res.status(200).json(resultAtendimentoDeletado))
      .catch((error: any) => res.status(400).json(error.message));
  };

}

export default new atendimentoController;
