const { Router } = require("express");
const controllers = require("../controllers/index");
const router = Router();

router.post("/YourWorkouts/addWorkout", controllers.addWorkout);

router.get("/yourWorkouts", controllers.getWorkouts);

router.get("/yourWorkouts/addComment", controllers.getReviews);

router.get("/yourWorkouts/addComment", controllers.getWorkoutsForComment);

router.get("/yourWorkouts/:id", controllers.getWorkoutbyID);

router.post("/yourWorkouts/addComment/:id", controllers.postAComment);

router.put("/yourWorkouts/:id", controllers.updateWorkout);

router.delete("/yourWorkouts/:id", controllers.deleteWorkout);

router.get("/yourDiets", controllers.getDiets);

module.exports = router;
