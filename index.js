const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello')
})
app.get('/login' ,(req,res)=>{
  res.send('abhinav')
})
app.get('/signup' ,(req,res)=>{
  res.send('signupPage')
})
app.get('/hey' , (req,res)=>{
  res.send('Fuck you')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})