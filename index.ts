// const express = require("express");
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const app: Express = express();
const port = process.env.PORT || 3000;
// const router = require("./routers")
import * as router from "./routers";

dotenv.config();
router(app, express);

app.listen(port, (error: any): void => {
    if (error) {
        console.log("Deu erro");
        return;
    }
    console.log("aplicação no ar")
});
