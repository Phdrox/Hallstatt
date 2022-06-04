const connection= require('../database/database');
const Sequelize=require('sequelize');


const tabela=connection.define('Pedidos',{
  
   Hamburgues:{
       type:Sequelize.STRING,
       allowNull:false
   },
   Bebidas:{
    type:Sequelize.STRING,
    allowNull:false
}}
);





module.exports=tabela;