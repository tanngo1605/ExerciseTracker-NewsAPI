let Exercise = require('../model/exercise');

exports.getExercise = async (req, res) =>{
    try{
        var exercises = await Exercise.find();
        res.json(exercises);
    }
    catch(err){
        console.log(err);
    }
}

exports.addExercise = async(req, res) =>{
    try{
        var newExercise = await Exercise.create(req.body);
        console.log('new exercise added');
    }
    catch(err) {
        console.log(err);
    }
}

exports.getExerciseById = async(req, res) =>{
    try{
        var exercise = await Exercise.findById(req.params.id );
        res.json(exercise);
    }
    catch(err){
        console.log(err);
    }
}
exports.deleteExercise =  async (req, res) =>{
   try{ await Exercise.findByIdAndDelete(req.params.id);
    console.log('exercise deleted!');}
    catch(err){
        console.log(err);
    }
}
exports.editExercise = async(req, res) =>{
    try{
       var updated = await Exercise.findByIdAndUpdate(req.params.id, req.body,{new: true});
       console.log('Updated!')
       res.json(updated);
    }
    catch(err){
        console.log(err);
    }
}