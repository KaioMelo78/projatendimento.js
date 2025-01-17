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
};

module.exports = new AtendimentoModel