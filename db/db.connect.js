import mongoose from "mongoose";

export const dbConnection = () =>{

    mongoose.connect(process.env.mongo_Url, {
        useNewUrlparser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Connected to database");
    })
    .catch((err)=>{
        console.log(" not Connected to database", err);
    })
}