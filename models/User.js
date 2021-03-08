const mongoose = require("mongoose");

const UserName = mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: "user"
    },
});

const User = mongoose.model("User", UserName);
module.exports = User;