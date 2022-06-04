
const Sequelize=require("sequelize");

const connection=new Sequelize('hallstatt','root','$Troia2103',{
host:'localhost',
dialect:'mysql'
});

module.exports=connection;