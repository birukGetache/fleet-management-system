const mongo = require("mongoose");
const schema = mongo.Schema({
    email:String,
    password:String
});
const User = mongo.model("fleets",schema);
module.exports = User;