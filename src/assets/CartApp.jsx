import { useState } from "react"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart') ) || [];

export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItems);

    const handlerAddProductCart = (producto) => {

        const hasItem  = cartItems.find((i) => i.producto.id === producto.id);
        if(hasItem){
            // setCartItems([
            //     ...cartItems.filter((i) => i.producto.id !== producto.id),
            //     {
            //         producto,
            //         quantity:hasItem.quantity +1,
            //         // total
            //     }
            // ])
            setCartItems(
                cartItems.map((i) => {
                    if(i.producto.id === producto.id){
                        i.quantity = i.quantity +1;
                    }
                    return i;
                })
            )
        }else{
            setCartItems([
                ...cartItems,
                {
                    producto,
                    quantity:1,
                    total: producto.price * 1
                }
            ]);
        }
    }

    const handlerDeleteProductoCart = (id) => {
        setCartItems([
            ...cartItems.filter((i) => i.producto.id !== id),
        ])
    }

    return (
        <>
            <div className="container my-4">
            
                <h1>CartApp</h1>
                <CatalogView handler={handlerAddProductCart}/>
                <div className="my-4 w-50">

                { cartItems?.length <= 0 || 
                    (
                        <CartView  items={cartItems} handlerDelete={handlerDeleteProductoCart} />
                    ) 
                }
                
                </div>
            </div>
        </>
    )
}