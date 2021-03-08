const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const app = express();

const bodyParser = require('body-parser');

const FoodModel = require("./models/Food");
const CategorieModel = require("./models/Categorie")
const User = require("./models/User")

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// mongoose.connect("mongodb+srv://admin:admin@cluster0.iutbg.mongodb.net/food?retryWrites=true&w=majority",{
//     useNewUrlParser: true,
// });
mongoose.connect("mongodb+srv://admin:admin@cluster0.iutbg.mongodb.net/Categorie?retryWrites=true&w=majority",{
    useNewUrlParser: true,
});

//authentification a l"aide de jwt

app.post('/api/login', (req, res) => {
    jwt.sign();
})



app.post('/insert', async(req,res)=>{
    const foodName = req.body.foodName
    const days = req.body.daysSinceIAte
    const food = new FoodModel({foodName: foodName,daysSinceIAte: days});
    try{
        await food.save();
        res.send("insert data");
    }catch(err){
        console.log(err);
    }
});
// add user .............................................

app.post('/adduser', async(req,res)=>{
    const name = req.body.username
    const password = req.body.password
    const user = new User({name: name,password: password});
    try{
        await user.save();
        res.send("user is inserted succefully");
    }catch(err){
        console.log(err);
    }
});

const users = [
    {
        username: 'john',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'anna',
        password: 'password123member',
        role: 'user'
    }
];

const accessTokenSecret = 'youraccesstokensecret';
app.post('/login', (req, res) => {
    // Read username and password from request body
    const { username, password } = req.body;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password is incorrect');
    }
});


const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
//add books si admin

app.get('/books', authenticateJWT, (req, res) => {

    const { role } = req.user;

    if (role !== 'admin') {
        return res.sendStatus(403);
    }

    res.json("OKOKOK");
});

// start test insert , just admin
app.post('/insertCategorie', authenticateJWT, async(req,res)=>{
    const { role } = req.user;

    if (role !== 'admin') {
        return res.sendStatus(403);
    }

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

    const categorie = new CategorieModel({categorieName: categorieName,question_1: question_1,question_2: question_2,question_3: question_3,question_4: question_4,question_5: question_5,question_6: question_6,question_7: question_7,question_8: question_8,question_9: question_9,question_10: question_10,reponse_question_1: reponse_question_1,reponse_question_2: reponse_question_2,reponse_question_3: reponse_question_3,reponse_question_4: reponse_question_4,reponse_question_5: reponse_question_5,reponse_question_6: reponse_question_6,reponse_question_7: reponse_question_7,reponse_question_8: reponse_question_8,reponse_question_9: reponse_question_9,reponse_question_10: reponse_question_10,});
    try{
        await categorie.save();
        res.send("insert data");
    }catch(err){
        console.log(err);
    }
});
// end test insert

app.get('/read', async(req,res)=>{
    // FoodModel.find({ $where: {foodName: "Apple"}}, )
    FoodModel.find({}, (err,result) =>{
        if (err){
            res.send(err)
        }
        res.send(result);   
    });
});

// start test read
app.get('/readCategorie', async(req,res)=>{
    // FoodModel.find({ $where: {categorieName: "Sport"}}, )
    CategorieModel.find({}, (err,result) =>{
        if (err){
            res.send(err)
        }
        res.send(result);   
    });
});
// end test read

app.put('/update', async(req,res)=>{
    const newFoodName = req.body.newFoodName
    const id = req.body.id

    try{
        await FoodModel.findById(id, (err, updatedFood)=>{
            updatedFood.foodName = newFoodName
            updatedFood.save();
            res.send("update");
        })
    }catch(err){
        console.log(err);
    }
});

app.delete("/delete/:id", async (req,res)=>{
    const id = req.params.id;
    
    await FoodModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});



app.listen(3001,() =>{
    console.log("Server running on port 3001...");
});