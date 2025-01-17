//async function connect(){
//    if(global.connection && global.connection.state !== "disconnected")
//        return global.connection;

//    const mysql = require("mysql2/promise");
//    const connection = mysql.createConnection("mysql://root:root@localhost:3306/database");
//    console.log("conectou");
//    global.connection = connection;
//    return connection;
//}


const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "database"
});

/*
function getConnection() {
    conexao.getConnection(error, conexao => {
        if(error) {
            console.log(error);
            return;
        }
        console.log("conectou");
    });
}
*/

module.exports = conexao;
