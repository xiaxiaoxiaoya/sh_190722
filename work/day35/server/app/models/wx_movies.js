const mongoose = require("mongoose");
const {Schema,model} = mongoose;
const moviesSchema = Schema({
    __v:{type:Number,select:false},
    image:{type:String},
    title:{type:String},
    content:{type:String},
    type:{type:Number}
});
module.exports = model('wx_movies', moviesSchema);