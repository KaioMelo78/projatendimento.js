// const express = require("express");
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const app: Express = express();
const port = process.env.PORT || 3000;
import routeAtendimento from "./routers";

dotenv.config();
routeAtendimento(app, express);

app.listen(port, (error) => {
  if (error) {
    console.log("Deu erro");
    return;
  }
  console.log("aplicação no ar")
});
