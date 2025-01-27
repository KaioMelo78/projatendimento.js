import router from "./atendimentoRoute"

function routeAtendimento(app: any, express: any) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(router);
};

export default routeAtendimento;
