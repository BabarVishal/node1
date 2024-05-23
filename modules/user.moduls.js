import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    DOB: {
        type: Number,
        require : true
    },
    password: {
        type: String,
        require: true
    },
    email: {
     type: String,
     require: true,
     unique: true,
    }
})

const User = mongoose.model("User", userSchema);

export { User }; 