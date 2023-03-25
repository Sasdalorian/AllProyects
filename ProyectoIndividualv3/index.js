import express from "express";
import hbs from "hbs";
import fs from "fs";
import myconnection from "express-myconnection";
import bodyParser from "body-parser";
import mysql from "mysql";
import {dirname, join} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.set('port', 3000);

app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: ''
}))

app.listen(app.get('port'), () => {
    console.log("Conectado al puerto", app.get('port'))
});


 //CARGAR JSON
const path = "./json/data.json";
const volun = JSON.parse(fs.readFileSync(path, {encoding: "utf-8"}));

app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.static(join(__dirname , "/node_modules/bootstrap/dist")));
app.use(express.static(join(__dirname , "/node_modules/sweetalert2/dist")));
app.use(express.static(join(__dirname , "/node_modules/normalize.css")));
hbs.registerPartials(join(__dirname , "/views/partials"));


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/donacion", (req, res) => {
    res.render("donacion");
});
app.get("/voluntariado", (req, res) => {
    res.render("voluntariado", {volun});
});