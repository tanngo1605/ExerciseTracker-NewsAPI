const router = require("express").Router();
const exerciseController = require("../controller/exerciseController");

//let Exercise = require('../model/exercise');

router
  .route("/")
  .get(exerciseController.getExercise)
  .post(exerciseController.addExercise);

router
  .route("/:id")
  .get(exerciseController.getExerciseById)
  .delete(exerciseController.deleteExercise)
  .patch(exerciseController.editExercise);

/*router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;
    

    const newEx = new Exercise({
        username,
        description,
        duration,
        date
        
    });

    newEx.save()
    .then(() => res.json('Exercise Added'))
    .catch(err => console.log(err));
})*/
module.exports = router;
