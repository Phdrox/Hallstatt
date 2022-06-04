const Sequelize=require('sequelize');
const connection=require('../database/database');
const Produtos=require('./Categories');

const Ficha=connection.define('FichaUsuario',{
    Nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Preço:{
        type:Sequelize.DOUBLE,
        allowNull:false
    }})

Produtos.belongsTo(Ficha);
Ficha.hasMany(Produtos);

module.exports= Ficha;