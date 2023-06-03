const express = require('express');
const router = express.Router();

const { checkAuthentication } = require('../config/jwt');
const todoController = require('../controller/todo_controller');


router.post('/create' , checkAuthentication, todoController.createTodo);
router.get('/get-todo', checkAuthentication,   todoController.getTodo);
router.put("/:id/update_status/:status_id", checkAuthentication, todoController.updateTodoStatus);
router.put('/update_data/:id', checkAuthentication,  todoController.updateTodoData);
router.delete("/:id/delete_item", checkAuthentication,  todoController.deleteTodo);

module.exports = router;