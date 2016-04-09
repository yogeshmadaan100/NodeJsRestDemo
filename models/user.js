/**
 * Created by yogeshmadaan on 04/04/16.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String,
    password: String,
    admin: Boolean
});

module.exports = mongoose.model('User', UserSchema);