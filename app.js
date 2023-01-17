const express = require('express')
const db = require("./db/index")
const app = express()
const port = 3000
const path = require('path')
const bodyparser = require("body-parser");
const methodOverride = require('method-override')

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('_method'))
console.log(__dirname)
// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))


// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.set('view engine', 'ejs')
app.use(express.json())
const users = require('./routes/userRoutes')

app.use(users)

app.listen(port,()=>{
    console.log(`port running di ${port}`)
})