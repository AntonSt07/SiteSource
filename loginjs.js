//const {username, password} = require('./connect');
var express = require('express');
var app = express();
var mysql = require('mysql');
const path = require('path');
const { password } = require('pg/lib/defaults');
app.post('/connect.js', ()=>{
  const username1 = module.username;
  const pass1 = module.password;
  console.log(username1);
})
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
app.use('/', express.static(path.join(__dirname + "login.html")));
app.use(express.urlencoded({ extended: false }));
app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname + '/login.html'));
});

///////should compare username from connect.js/database/??? 
app.get('/login', ()=>{
  const username2 = module.username;
  const password2 = module.password;
  if(username2 == username1 && password2 == pass1){
    console.log("Hello" + username2);
  }
})
//document.getElementById(('submit-login'), function func1(){
    
//});
////////


module.exports = conn;
app.listen(7000, ()=>{console.log("Server Listening")});