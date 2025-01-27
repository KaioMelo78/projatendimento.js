// const {PrismaClient} = require("@prisma/client");
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

class AtendimentoModel {
  async listar() {
    const data = await prisma.atendimento.findMany({
      where: { deleted: false }
    });
    console.log("era essa peça que voce queria?");
    return data;

  };

  async criar(novoAtendimento: any) {
    return await prisma.atendimento.create({
      data: novoAtendimento
    })
  };

  async atualizar(atendimentoAtualizado: any, id: any) {
    return await prisma.atendimento.update({
      where: { id },
      data: atendimentoAtualizado
    });
  };

  async deletar(id: any) {
    return await prisma.atendimento.update({
      where: { id },
      data: { deleted: true }
    })
  };
}

export default new AtendimentoModel;
