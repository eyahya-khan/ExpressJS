const express = require('express')
const app = express()
const port = 4000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

// npm install body-parser
// import body-parser for 
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send('Good morning! welcome')
  })
app.get('/home', (req, res) => {
  res.send('Good morning! home page')
})

app.get('/aboutus', (req, res) => {
    res.send('Good morning! about us page')
  })

  //open another file
  app.get('/calculator', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

  //catch/receive post data from index.html file
  // if in index.html <form>. there is action='app.js' then we will write app.post('/app.js', (req, res) => {
  app.post('/calculator', (req, res) => {
   // res.send('thank you form post ')
    console.log(req.body)
//receive value from index.html <for>
let firstInputValue = Number(req.body.v1)
let secondInputValue = Number(req.body.v2)

let jogfal= firstInputValue + secondInputValue;
res.send('Sum is: '+ jogfal)
  })

  
 // BMI calculator
  //open another file
  app.get('/bmi', (req, res) => {
    res.sendFile(__dirname + '/bmi.html')
  })

    app.post('/bmi', (req, res) => {
        // res.send('thank you form post ')
         console.log(req.body)
     //receive value from index.html <for>
     let w = Number(req.body.weight)
     let h = Number(req.body.height)
     
     //formula: weight/(height)2 ex kg/meter square
     let BMI= w / ((h/100)*(h/100));
     res.send('BMI is: '+ BMI)
    })