import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import bcrypt from 'bcrypt';

const router = express.Router();

//route to get all users
router.get('', userController.getAllUsers);

//route to create a new user
router.post('', userController.newUser);

//route to get a single user by their user id
router.get('/:_id',userController.getUser);

//route to update a single user by their user id
router.put('/:_id', userController.updateUser);

//route to delete a single user by their user id
router.delete('/:_id', userController.deleteUser);

// route to register a new user 
router.post('/register',userController.registerUserController);

// route to login registered users 
router.post('/login',userController.loginUserController );

export default router;

