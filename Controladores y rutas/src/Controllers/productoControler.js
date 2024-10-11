let data = [
    {
        id: 1,
        nombre: 'papa',
        precio: 500
    },
    {
        id: 2,
        nombre: 'pera',
        precio: 200
    },
    {
        id: 3,
        nombre: 'manzana',
        precio: 800
    }
]

const getProducto = (req, res) =>{
    const id = req.params.id
    const producto = data.find(dato => dato.id == id)
    res.json(producto)
}

const allProductos = (req, res) => {
    res.json(data)
}

const deleteProducto = (req, res) => {
    const id = req.params.id
    data = data.filter(data => data.id != id)
    res.status(204).end()
}

module.exports = { allProductos, getProducto, deleteProducto }