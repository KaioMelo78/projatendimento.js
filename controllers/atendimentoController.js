const atendimentoModel = require("../models/atendimentoModel");
class atendimentoController {
    buscar(){
        return atendimentoModel.listar();
    }
    criar(novoAtendimento){
        return atendimentoModel.criar(novoAtendimento);
    }
    alterar(id){
        return `Alterando o atendimento ${id}...`
    }
    deletar(id){
        return `Deletando o atendimento ${id}...`
    }

}   

module.exports = new atendimentoController();