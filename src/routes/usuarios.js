const {Router}=require('express');
const router=Router();
const { getUsers, createUser, getUser, updateUser, deleteUser,loginUser } = require('../controllers/usuarios.controller');

router.route('/')
.get(getUsers)
.post(createUser)
.post('/login', loginUser);

// http://localhost:4000/api/users/1
router.route('/:id')
.get(getUser)
.put(updateUser)
.delete(deleteUser);

module.exports=router;




