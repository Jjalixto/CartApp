import { useEffect, useState } from "react";
import { calculateTotal } from "../../service/productoService";


export const CartView = ( {handlerDelete,items} ) => {

    const [total, setTotal] = useState(0);

    useEffect(()=> {
        setTotal(calculateTotal(items));
        sessionStorage.setItem('cart', JSON.stringify(items));
    },[items]);

    const onDeleteProducto = (id) => {
        // console.log("eliminando producto");
        handlerDelete(id);
    }

    return (
        <>
            <h3>Carro de Compras</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                    <tr key={item.producto.id}>
                        <td>{item.producto.name}</td>
                        <td>{item.producto.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.quantity * item.producto.price}</td>
                        <td><button 
                            className="btn btn-danger"
                            onClick={() => onDeleteProducto(item.producto.id)}>Eliminar</button></td>
                    </tr>
                    ))}
                    
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">total</td>
                        <td colSpan="2" className="text-start fw-bold">{total}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}
