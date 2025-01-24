// const routerAtendimento = require("./atendimentoRoute");
import routerAtendimento from "./atendimentoRoute.ts"
module.exports(app: any, express: any): void => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(routerAtendimento);
};


