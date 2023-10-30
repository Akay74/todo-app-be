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
router.post("/update", updateToDo);
router.post("/delete", deleteToDo);

module.exports = router;