const CategorieModel = require('../models/Categorie');
const UserModel = require('../models/User');
var jwt = require('jsonwebtoken');


//GET ALL CATEGORIES
const getAllCategories = (async (req,res)=>{
    // FoodModel.find({ $where: {categorieName: "Sport"}}, )
    CategorieModel.find({}, (err,result) =>{
        if (err){
            res.send(err)
        }
        res.send(result);  
        //STATUS 200 
    });
});


//GET CATEGORIE BY ID
const getCategorieById = (async (req,res)=>{
    const id = req.params.id;
    await CategorieModel.findById(id, (err,result) =>{
        if (err){
            res.send(err)
        }
        
        res.send([result]);   
    });
});


//ADD CATEGORIE
const addCategorie = (async (req,res)=>{
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


//DELETE CATEGORY
const deleteCategorie = (async (req,res)=>{
    const id = req.params.id;
    
    await CategorieModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});


//inscription
const inscription = (async (req,res)=>{
    const email = req.body.email;
    // const passWord = req.body.passWord;
    const role = "user";
    const hashcode = req.body.passWord;
    
    const user = new UserModel({email: email,role:role,hashcode:hashcode});
    try{
        await user.save();
        res.send("insert data");
    }catch(err){
        console.log(err);
    }
});






const login = async(req, res, next) =>{
    const {email, passWord} = req.body;
  
    try{
        const user = await UserModel.findOne({email})
        if(!user){
          const err = new Error(`the email ${email} was not found on our system`);
          err.status = 401;
          next(err);
        }
  
        user.isPasswordMatch(passWord, user.hashcode, (err, matched)=>{
          if(matched){
            const secret = "ThisIsTopSecret";
            // const expire = process.env.JWT_EXPRITION;
  
            const token = jwt.sign({_id:user._id}, secret);
            return res.send(token);
          }
          res.status(401).send({
            error: 'Invalid email/password combination'
          });
        });
    }catch(e){
         next(e)
    }
  
  }







module.exports = {
    getAllCategories,
    getCategorieById,
    addCategorie,
    deleteCategorie,
    inscription,
    login,
}