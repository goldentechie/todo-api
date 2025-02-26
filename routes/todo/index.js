var express = require("express");
var router = express.Router();
const Todo = require("../../db/models/Todo");

/* GET all todos */
router.get("/", async function (req, res, next) {
  try {
    const todos = await Todo.findAll();
    res.send(todos);
  } catch (reason) {
    res.status(500).send(reason);
  }
});

/* create a todo */
router.post("/", async function (req, res, next) {
  console.log(req.body);
  const newTodo = req.body;
  Todo.create(newTodo)
    .then((createdTodo) => {
      res.status(201).send(createdTodo);
    })
    .catch((reason) => {
      res.status(500).send(reason);
    });
});

/* update a todo partially */
router.patch("/", async function (req, res, next) {
  try {
    const todo = await Todo.findByPk(req.body.id);
    if (!todo) return res.status(404).send("Todo not found");
    await todo.update(req.body);
    res.send(todo);
  } catch (reason) {
    res.status(500).send(reason);
  }
});

/* delete a todo */
router.delete("/", async function (req, res, next) {
  try {
    const todo = await Todo.findByPk(req.body.id);
    if (!todo) return res.status(404).send("Todo not found");
    await todo.destroy();
    res.send("Deleted");
  } catch (reason) {
    res.status(500).send(reason);
  }
});

module.exports = router;
