class tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaAtendimentos();
    }

    criarTabelaAtendimentos() {
        const sql = `
            CREATE TABLE IF NOT EXISTS atendimento (
                id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
                createdAt DATE,
                servico VARCHAR(100),
                cliente VARCHAR(100),
                STATUS ENUM("ativo", "realizado", "cancelado") DEFAULT "ativo"
            );`
        ;
        this.conexao.query(sql, (error) => {
            if(error) {
                console.log("Eita, deu erro na hora de criar a tabela atendimento");
                console.log(error.message());
                return;
            }
            console.log("Tabela atendimento criada com sucesso");
        })
    }
}

module.exports = new tabelas();