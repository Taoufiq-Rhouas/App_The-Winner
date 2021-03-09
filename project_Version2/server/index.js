const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const CategorieModel = require("./models/Categorie")

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin@cluster0.iutbg.mongodb.net/Categorie?retryWrites=true&w=majority",{
    useNewUrlParser: true,
});


app.post('/insertCategorie', async(req,res)=>{
    const categorieName = req.body.categorieName;

    const question_1 = req.body.question_1;
    const question_2 = req.body.question_2;
    const question_3 = req.body.question_3;
    const question_4 = req.body.question_4;
    const question_5 = req.body.question_5;
    const question_6 = req.body.question_6;
    const question_7 = req.body.question_7;
    const question_8 = req.body.question_8;
    const question_9 = req.body.question_9;
    const question_10 = req.body.question_10;

    const reponse_question_1 = req.body.reponse_question_1;
    const reponse_question_2 = req.body.reponse_question_2;
    const reponse_question_3 = req.body.reponse_question_3;
    const reponse_question_4 = req.body.reponse_question_4;
    const reponse_question_5 = req.body.reponse_question_5;
    const reponse_question_6 = req.body.reponse_question_6;
    const reponse_question_7 = req.body.reponse_question_7;
    const reponse_question_8 = req.body.reponse_question_8;
    const reponse_question_9 = req.body.reponse_question_9;
    const reponse_question_10 = req.body.reponse_question_10;

    const reponse_faux_1_question_1 = req.body.reponse_faux_1_question_1;
    const reponse_faux_2_question_1 = req.body.reponse_faux_2_question_1;
    const reponse_faux_3_question_1 = req.body.reponse_faux_3_question_1;
    const reponse_faux_4_question_1 = req.body.reponse_faux_4_question_1;
    const reponse_faux_1_question_2 = req.body.reponse_faux_1_question_2;
    const reponse_faux_2_question_2 = req.body.reponse_faux_2_question_2;
    const reponse_faux_3_question_2 = req.body.reponse_faux_3_question_2;
    const reponse_faux_4_question_2 = req.body.reponse_faux_4_question_2;
    const reponse_faux_1_question_3 = req.body.reponse_faux_1_question_3;
    const reponse_faux_2_question_3 = req.body.reponse_faux_2_question_3;
    const reponse_faux_3_question_3 = req.body.reponse_faux_3_question_3;
    const reponse_faux_4_question_3 = req.body.reponse_faux_4_question_3;
    const reponse_faux_1_question_4 = req.body.reponse_faux_1_question_4;
    const reponse_faux_2_question_4 = req.body.reponse_faux_2_question_4;
    const reponse_faux_3_question_4 = req.body.reponse_faux_3_question_4;
    const reponse_faux_4_question_4 = req.body.reponse_faux_4_question_4;
    const reponse_faux_1_question_5 = req.body.reponse_faux_1_question_5;
    const reponse_faux_2_question_5 = req.body.reponse_faux_2_question_5;
    const reponse_faux_3_question_5 = req.body.reponse_faux_3_question_5;
    const reponse_faux_4_question_5 = req.body.reponse_faux_4_question_5;
    const reponse_faux_1_question_6 = req.body.reponse_faux_1_question_6;
    const reponse_faux_2_question_6 = req.body.reponse_faux_2_question_6;
    const reponse_faux_3_question_6 = req.body.reponse_faux_3_question_6;
    const reponse_faux_4_question_6 = req.body.reponse_faux_4_question_6;
    const reponse_faux_1_question_7 = req.body.reponse_faux_1_question_7;
    const reponse_faux_2_question_7 = req.body.reponse_faux_2_question_7;
    const reponse_faux_3_question_7 = req.body.reponse_faux_3_question_7;
    const reponse_faux_4_question_7 = req.body.reponse_faux_4_question_7;
    const reponse_faux_1_question_8 = req.body.reponse_faux_1_question_8;
    const reponse_faux_2_question_8 = req.body.reponse_faux_2_question_8;
    const reponse_faux_3_question_8 = req.body.reponse_faux_3_question_8;
    const reponse_faux_4_question_8 = req.body.reponse_faux_4_question_8;
    const reponse_faux_1_question_9 = req.body.reponse_faux_1_question_9;
    const reponse_faux_2_question_9 = req.body.reponse_faux_2_question_9;
    const reponse_faux_3_question_9 = req.body.reponse_faux_3_question_9;
    const reponse_faux_4_question_9 = req.body.reponse_faux_4_question_9;
    const reponse_faux_1_question_10 = req.body.reponse_faux_1_question_10;
    const reponse_faux_2_question_10 = req.body.reponse_faux_2_question_10;
    const reponse_faux_3_question_10 = req.body.reponse_faux_3_question_10;
    const reponse_faux_4_question_10 = req.body.reponse_faux_4_question_10;

    const categorie = new CategorieModel({categorieName: categorieName,question_1: question_1,question_2: question_2,question_3: question_3,question_4: question_4,question_5: question_5,question_6: question_6,question_7: question_7,question_8: question_8,question_9: question_9,question_10: question_10,reponse_question_1: reponse_question_1,reponse_question_2: reponse_question_2,reponse_question_3: reponse_question_3,reponse_question_4: reponse_question_4,reponse_question_5: reponse_question_5,reponse_question_6: reponse_question_6,reponse_question_7: reponse_question_7,reponse_question_8: reponse_question_8,reponse_question_9: reponse_question_9,reponse_question_10: reponse_question_10,
        reponse_faux_1_question_1: reponse_faux_1_question_1,
        reponse_faux_2_question_1: reponse_faux_2_question_1,
        reponse_faux_3_question_1: reponse_faux_3_question_1,
        reponse_faux_4_question_1: reponse_faux_4_question_1,
        reponse_faux_1_question_2: reponse_faux_1_question_2,
        reponse_faux_2_question_2: reponse_faux_2_question_2,
        reponse_faux_3_question_2: reponse_faux_3_question_2,
        reponse_faux_4_question_2: reponse_faux_4_question_2,
        reponse_faux_1_question_3: reponse_faux_1_question_3,
        reponse_faux_2_question_3: reponse_faux_2_question_3,
        reponse_faux_3_question_3: reponse_faux_3_question_3,
        reponse_faux_4_question_3: reponse_faux_4_question_3,
        reponse_faux_1_question_4: reponse_faux_1_question_4,
        reponse_faux_2_question_4: reponse_faux_2_question_4,
        reponse_faux_3_question_4: reponse_faux_3_question_4,
        reponse_faux_4_question_4: reponse_faux_4_question_4,
        reponse_faux_1_question_5: reponse_faux_1_question_5,
        reponse_faux_2_question_5: reponse_faux_2_question_5,
        reponse_faux_3_question_5: reponse_faux_3_question_5,
        reponse_faux_4_question_5: reponse_faux_4_question_5,
        reponse_faux_1_question_6: reponse_faux_1_question_6,
        reponse_faux_2_question_6: reponse_faux_2_question_6,
        reponse_faux_3_question_6: reponse_faux_3_question_6,
        reponse_faux_4_question_6: reponse_faux_4_question_6,
        reponse_faux_1_question_7: reponse_faux_1_question_7,
        reponse_faux_2_question_7: reponse_faux_2_question_7,
        reponse_faux_3_question_7: reponse_faux_3_question_7,
        reponse_faux_4_question_7: reponse_faux_4_question_7,
        reponse_faux_1_question_8: reponse_faux_1_question_8,
        reponse_faux_2_question_8: reponse_faux_2_question_8,
        reponse_faux_3_question_8: reponse_faux_3_question_8,
        reponse_faux_4_question_8: reponse_faux_4_question_8,
        reponse_faux_1_question_9: reponse_faux_1_question_9,
        reponse_faux_2_question_9: reponse_faux_2_question_9,
        reponse_faux_3_question_9: reponse_faux_3_question_9,
        reponse_faux_4_question_9: reponse_faux_4_question_9,
        reponse_faux_1_question_10: reponse_faux_1_question_10,
        reponse_faux_2_question_10: reponse_faux_2_question_10,
        reponse_faux_3_question_10: reponse_faux_3_question_10,
        reponse_faux_4_question_10: reponse_faux_4_question_10,
    
    });
    try{
        await categorie.save();
        res.send("insert data");
    }catch(err){
        console.log(err);
    }
});


app.get('/readCategories', async(req,res)=>{
    // FoodModel.find({ $where: {categorieName: "Sport"}}, )
    CategorieModel.find({}, (err,result) =>{
        if (err){
            res.send(err)
        }
        res.send(result);   
    });
});


app.delete("/deleteCat/:id", async (req,res)=>{
    const id = req.params.id;
    
    await CategorieModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});

app.get('/readEvaluationCategorie/:id', async(req,res)=>{
    const id = req.params.id;
    await CategorieModel.findById(id, (err,result) =>{
        if (err){
            res.send(err)
        }
        
        res.send([result]);   
    });
});


app.listen(3001,() =>{
    console.log("Server running on port 3001...");
});