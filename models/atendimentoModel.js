const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

class AtendimentoModel {
    async listar() {
        const data = await prisma.atendimento.findMany({
            where: {deleted: false}
        });
        console.log("era essa peça que voce queria?");
        return data;
    
    };
    
    async criar(novoAtendimento) {
        return await prisma.atendimento.create({
            data: novoAtendimento
        })
    };

    async atualizar(atendimentoAtualizado, id) {
        console.log(dataatual);
        return await prisma.atendimento.update({
            where: { id },
            data: atendimentoAtualizado
        });
    };

    async deletar(id) {
        return await prisma.atendimento.update({
            where: { id },
            data: {deleted: true}
        })
    };
};

module.exports = new AtendimentoModel