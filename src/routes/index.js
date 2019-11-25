const {Router}=require('express')
const router=Router()
const {getUsers,createUser,getUserId,deleteUser,updateUser}=require('../controllers/controller')


//routes

router.get('/users',getUsers)
router.post('/users',createUser)
router.get('/users/:id',getUserId)
router.delete('/users/:id',deleteUser)
router.put('/users/:id',updateUser)
module.exports =router;