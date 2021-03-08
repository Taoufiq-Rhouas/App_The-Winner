const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema({
    foodName: {
        type: String,
        require: true,
    },
    daysSinceIAte: {
        type: Number,
        require: true,
    },
});

const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;