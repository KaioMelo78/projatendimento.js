const atendimentoController = require("../controllers/atendimentoController");
const conexao = require("../infraestrutura/conexao");  
class AtendimentoModel {
    listar() {
        const sql = "SELECT * FROM atendimento";
        return new Promise((resolve, reject) => {
            conexao.query(sql, {}, (error, resposta) => {
                if(error) {
                    console.log("Deu erro ao listar...");
                    reject(error);
                    return;
                };
                console.log("hell yeah");
                resolve(resposta);
            });
        });
    };
    criar(novoAtendimento) {
            const sql = "INSERT INTO atendimento SET ?";
            return new Promise((resolve, reject) => {
                conexao.query(sql, novoAtendimento, (error, resposta) => {
                    if(error){
                        console.log("Deu erro na hora de inserir");
                        reject(error);
                        return;
                    };
                    console.log("receba suiii");
                    resolve(resposta);
                });
            });
    };

    atualizar(atendimentoAtualizado, id) {
        const sql = "UPDATE atendimento SET ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, [atendimentoAtualizado, id], (error, resposta) => {
                if(error){
                    console.log("Deu erro na hora de atualizar");
                    reject(error);
                    return;
                };
                console.log("a tu a li zei");
                resolve(resposta);
            });
        });
};
};

module.exports = new AtendimentoModel