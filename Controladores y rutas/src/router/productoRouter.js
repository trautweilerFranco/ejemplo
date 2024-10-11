const { Router } = require('express')
const productoController = require('../Controllers/productoControler')
const router = Router()

router.get('/producto', productoController.allProductos)

router.get('/producto/:id', productoController.getProducto)

router.delete('/producto/:id', productoController.deleteProducto)

module.exports = router