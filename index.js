//Dependencies
const express =require("express");
const app =express();
const body_parser=require("body-parser");
const connection=require('./database/database')
const Pedidos =require('./categories/Categories')
const Ficha=require('./categories/Ficha');
const Rota=require('./Rotas/Routers');


//View Engine
app.set('view engine','ejs');
app.use(express.static("public",{
    index:false,
    immutable:true,
    cacheControl:true,
}));

//DataBase

connection
.authenticate()
.then(()=>{
    console.log('Conexão');})
.catch(()=>{
    console.log('Erro');
})


//Body-Parser
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

//Routers
app.use('/',Rota);

//Servers 
app.listen(80,(erro)=>{
    if(erro){
    console.log("Não foi possivel abrir")
}else{
    console.log("Tudo Ok,servidor aberto")
}})



