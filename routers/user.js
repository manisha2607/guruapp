const express = require('express');
const router = express.Router();

const userController = require('../controller/user_controller');


router.post('/create', userController.register_user);

router.post('/login', userController.signIn_user);
 
module.exports=router;