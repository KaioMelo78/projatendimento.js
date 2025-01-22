const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers")

router(app, express);

app.listen(port, (error) => {
    if(error) {
        console.log("Deu erro");
        return;
    }
    console.log("aplicação no ar")
});