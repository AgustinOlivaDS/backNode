const express = require('express')
const app = express()
const PORT = 8080
const routes = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', routes)

app.use('/', express.static(__dirname + '/public'))

const server = app.listen(PORT, () => {
    console.log(`Server linstening on port ${server.address().port}`)
})
