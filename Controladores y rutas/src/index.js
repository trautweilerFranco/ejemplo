const express = require('express')
const route = require('./router/productoRouter')

const app = express()

// RUTAS 
app.use(route)

const PORT = 3000
app.listen(PORT)