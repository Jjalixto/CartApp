import { productos } from "../data/productos"

export const getProducto = () => {
    return productos;
}

export const calculateTotal = (items) => {
    return items.reduce(
        (accumulator, item) => accumulator + item.producto.price * item.quantity,
        0)
}