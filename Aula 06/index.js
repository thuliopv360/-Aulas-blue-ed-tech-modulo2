// const express = require("express"); jeito de importar o express

import express from "express";
// importando o express 
import path from "path";
//servi para definir caminhos padroes

const __dirname = path.resolve(path.dirname("")); // serve para informar qual e o caminho padrao da minha pasta

const app = express();
const port = 3001;
// pegar todo o espress e colocar na variavel app ou const app

app.set("view engine", "ejs"); // faz  com que o express reconheca o ejs como motor de visualizaçao 
app.use(express.static(path.join(__dirname, "public")))

app.listen(port, () => { // funcao que cria o servidor 
    console.log(`Rodnado na port ${port}`)
})

let cavalheirosDeOuro = [{
    nome: "Aioros",
    signos: "leão"
}, {
    nome: "Aldebaran",
    signos: "touro"
}, {
    nome: "Shaka",
    signos: "virgem"
}, {
    nome: "Afrodite",
    signos: "peixes"
}]

app.get("/", (req, res) => {
    res.render("index.ejs", {
        cavalheirosDeOuro
    })
})

app.get("/detalhes", (req, res) => {
    res.render("detalhes.ejs")
})