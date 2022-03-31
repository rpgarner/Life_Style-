const { Router } = require("express");
const controllers = require("../controllers/index");
const router = Router();

router.post("/YourWorkouts/addWorkout", controllers.addWorkout);

router.get("/yourWorkouts", controllers.getWorkouts);

router.get("/yourReviews", controllers.getReviews);

router.get("/yourWorkouts/addComment", controllers.getWorkoutsForComment);

router.get("/yourWorkouts/:id", controllers.getWorkoutbyID);

router.post("/yourWorkouts/addComment/:id", controllers.postAComment);

router.put("/yourWorkouts/:id", controllers.updateWorkout);

router.delete("/yourWorkouts/:id", controllers.deleteWorkout);

module.exports = router;
