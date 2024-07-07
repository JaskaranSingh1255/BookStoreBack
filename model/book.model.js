import mongoose from "mongoose";

const Schema= mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    image:String,
    category:String
})
const Book=mongoose.model("Book",Schema);

export default Book;