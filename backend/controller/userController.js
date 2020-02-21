const User = require('../model/user');

exports.getAllUser = async (req, res) =>{
    var Users = await User.find();
    res.json(Users);

}
exports.createUser = async (req, res) =>{
    try{
    var newUser = await User.create(req.body);
    console.log(`newUSerAdded: ${req.body.username}` );}
    catch(err){
        console.log(err);
    }
}

exports.findById = async (req, res) =>{
    try{
        var user = User.findById(req.params.id);
        res.json(user);
    }
    catch (err){
        console.log(err);
    }
}