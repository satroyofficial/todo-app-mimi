const { Router } = require("express");
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/ToDoControllers");

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/update", updateToDo);
router.delete("/delete", deleteToDo);

module.exports = router;
