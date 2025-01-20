const atendimentoController = require("../controllers/atendimentoController");
const conexao = require("../infraestrutura/conexao");  
class AtendimentoModel {
    executaQuery(sql, parametros = ""){
        return new Promise((resolve, reject) => {
            conexao.query(sql, parametros, (error, resposta) => {
            if(error) {
                return reject(error);
            };
            return resolve(resposta);
            });
        });
    };
    listar() {
        const sql = "SELECT * FROM atendimento";
        return this.executaQuery(sql);
    };
    criar(novoAtendimento) {
        const sql = "INSERT INTO atendimento SET ?";
        return this.executaQuery(sql, novoAtendimento);    
    };

    atualizar(atendimentoAtualizado, id) {
        const sql = "UPDATE atendimento SET ? WHERE id = ?";
        return this.executaQuery(sql, [atendimentoAtualizado, id]);
    };

    deletar(id) {
        const sql = "DELETE FROM atendimento WHERE id = ?";
        return this.executaQuery(sql, id);
    };
};

module.exports = new AtendimentoModel