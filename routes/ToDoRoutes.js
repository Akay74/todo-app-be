const { Router } = require("express");

const router = Router();

router.get('/', (req, res) => {
  res.json({message: "To-do node app"})
})

module.exports = router;