var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = new Schema({
    username : String,
    psw      : String,
    date     : { type: Date, default: Date.now }
});

var UserModel = mongoose.model('vip', User);

module.exports = UserModel;