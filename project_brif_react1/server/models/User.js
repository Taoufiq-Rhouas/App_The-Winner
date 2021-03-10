const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        //
    },
    // passWord: {
    //     type: String,
    //     require: true,
    // },
    role: {
        type: String,
        // require: true,
    },
    hashcode: {
        type: String,
        require: true,
        // require: true,
    },
});



UserSchema.pre('save', async function(next){
    if(!this.isModified('hashcode')){
        return next();
    }
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.hashcode, salt);
        this.hashcode = hash;
        next();
        
    }catch(e){
        return next(e)
    }
});

 

//hadi
UserSchema.methods.isPasswordMatch = function(passWord, hash, collback){
    bcrypt.compare(passWord, hash, (err, success)=>{
        if(err){
            return collback(err);
        }
        collback(null, success); 
    })
}
//hadi

const User = mongoose.model("User", UserSchema);
module.exports = User;