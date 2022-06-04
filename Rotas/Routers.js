
const express=require('express');
const router=express.Router();
const Cate=require('../categories/Categories');
const body_parser=require('body-parser');

router.get("/",(req,res)=>{
       res.render("./HallStatt");
});

router.get('/Adicionar',(req,res)=>{
    res.render('./Adicionar'); 
    })

router.post('/Adicionar',(req,res)=>{
var hamburguer=req.body.Hamburguer;
var Bebidas=req.body.Bebidas;

Cate.create({
    Hamburgues:hamburguer,
    Bebidas:Bebidas
}).then(()=>{
    res.redirect('/Adicionar');
}).catch(
    ()=>{
        res.redirect('/');
    }
)
})



router.use(body_parser.urlencoded({extended:false}));
router.use(body_parser.json());


module.exports=router;