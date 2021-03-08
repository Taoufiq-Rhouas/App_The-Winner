// const mongoose = require("mongoose");

// const FoodSchema = mongoose.Schema({
//     foodName: {
//         type: String,
//         require: true,
//     },
//     daysSinceIAte: {
//         type: Number,
//         require: true,
//     },
// });

// const Food = mongoose.model("Food", FoodSchema);
// module.exports = Food;





// start test
const mongoose = require("mongoose");

const CategorieSchema = mongoose.Schema({
    categorieName: {
        type: String,
        require: true,
    },
    question_1: {
        type: String
    },
    question_2: {
        type: String
    },
    question_3: {
        type: String
    },
    question_4: {
        type: String
    },
    question_5: {
        type: String
    },
    question_6: {
        type: String
    },
    question_7: {
        type: String
    },
    question_8: {
        type: String
    },
    question_9: {
        type: String
    },
    question_10: {
        type: String
    },
    reponse_question_1: {
        type: String
    },
    reponse_question_2: {
        type: String
    },
    reponse_question_3: {
        type: String
    },
    reponse_question_4: {
        type: String
    },
    reponse_question_5: {
        type: String
    },
    reponse_question_6: {
        type: String
    },
    reponse_question_7: {
        type: String
    },
    reponse_question_8: {
        type: String
    },
    reponse_question_9: {
        type: String
    },
    reponse_question_10: {
        type: String
    },
});

const Categorie = mongoose.model("Categorie", CategorieSchema);
module.exports = Categorie;
// end test