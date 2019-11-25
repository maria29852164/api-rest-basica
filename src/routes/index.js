const {Router}=require('express')
const router=Router()
const {getUsers,createUser,getUserId}=require('../controllers/controller')


//routes

router.get('/users',getUsers)
router.post('/users',createUser)
router.get('/users/:id',getUserId)
module.exports =router;