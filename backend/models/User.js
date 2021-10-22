const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const {getUser} = require("../controllers/userControllers");
const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
        },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    weight: {
        type: Number,
        default: 0
    },
    maxDays: {
        type: Number,
        default: 0
    },
    currentDays: {
        type: Number,
        default: 0
    },
    pic: {
        type: String,
        required: true,
        default: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save',async function (next)
{
    if(this.isModified('password'))
    {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
UserSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}
const User =  mongoose.model('User', UserSchema);
module.exports= User;
