require('dotenv').config()
const express = require("express")
const morgan = require("morgan")
const cors = require('cors')
const CheeseController = require('./controllers/cheese')

const app = express()

// middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())// this middleware allows us to send a JSON request with our request (like with POST request)



// routes
app.use('/cheese', CheeseController)

app.get("/", (req, res) => {
    res.send('hello world')
})


const PORT = process.env.PORT

app.listen(PORT, () => console.log(`listening on port ${PORT}`))