var express = require('express');
var app = express();
var mysql = require('mysql');
const path = require('path');
var conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'Anton',      
  password: 'password',     
  database: 'test_for_web'
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
app.use('/css', express.static(path.join(__dirname + "/css")));
app.use(express.urlencoded({ extended: false }));
app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname + '/register.html'));
});
app.post('/register', (req,res)=>{
  
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  
  conn.query(`INSERT INTO registration (username, email, password) VALUES ('${username}', '${email}', '${password}')`, (err,results)=>{
    if(err)throw err;
    
  })
})
app.get('', (req,res)=>{
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  module.exports = {username, password};
})

module.exports = conn;
app.listen(9000, ()=>{console.log("Server Listening")});
