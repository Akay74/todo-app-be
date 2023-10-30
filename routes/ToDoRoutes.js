const { Router } = require("express");
const {
  getToDos,
  saveToDo,
  updateToDo,
  deleteToDo
} = require("../controller/ToDoController");

const router = Router();

router.get("/get", getToDos);
router.post("/save", saveToDo);
router.post("/save", updateToDo);
router.post("/save", deleteToDo);

module.exports = router;