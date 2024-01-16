import { useItemsCart } from "./hooks/useItemsCart"
import { Navbar } from "./components/NavBar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart();

    return (
        <>
        {/* lo que no esta dentro de las route se mantiene para todas las rutas */}
            <Navbar />
            <div className="container my-4">

                <h3>Cart App</h3>

                <CartRoutes 
                    cartItems={cartItems} 
                    handlerAddProductCart={handlerAddProductCart} 
                    handlerDeleteProductCart={handlerDeleteProductCart}
                    />
            </div>
        </>
    )
}