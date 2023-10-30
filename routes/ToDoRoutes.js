const { Router } = require("express");
const {
  getToDos,
  saveToDo,
} = require("../controller/ToDoController");

const router = Router();

router.get("/get", getToDos);
router.post("/save", saveToDo);

module.exports = router;