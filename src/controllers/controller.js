//connection psql
const {Pool}=require('pg')

const pool =new Pool({
    host:'localhost',
    user:'postgres',
    password:'yoyo',
    database:'myapi'
})

/* const {Pool}=require('pg'),
   pool=new Pool({

   })

*/



const getUsers=async(req,res)=>{

    const Users=await pool.query('SELECT * FROM users')
    console.log(Users.rows)
    res.status(200).json(Users.rows)
    res.send('users')
}
const createUser=async(req,res)=>{
    //const {name,email}=req.body
    //const response=await pool.query('INSERT INTO users(name_user,email) VALUES($1 , $2) ',[req.body.name,req.body.email]);
    //const prueba =await pool.query('INSERT INTO users(name_user,email) VALUES("ssss","ssssa")')
    //console.log(response)
    console.log(req.body)
    res.send('users');

    
    //res.send('user created')
    
    

}

module.exports={
    getUsers,
    createUser

};