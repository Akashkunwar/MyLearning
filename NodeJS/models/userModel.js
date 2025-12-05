const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
    username : {
        type: String,
        required : [true, "Please add the Username"]
    },
    email : {
        type: String,
        required : [true, "Please add the email address"],
        unique : [true, "Email already taken"]
    },
    password : {
        type: String,
        required : [true, "Please add the user passwrod"]
    },
},
{
    tiemstamp: true,
});

module.exports = mongoose.model("User", userScheme);