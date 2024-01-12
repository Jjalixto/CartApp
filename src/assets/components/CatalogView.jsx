import { useEffect, useState } from "react";
import { getProducto } from "../../service/productoService";
import { CatalogItem } from "./CatalogItem";

export const CatalogView = ({ handler }) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(getProducto());
    }, []);

    return (
        <>
            <div className="row">
                {productos.map(prod => (
                    <div className="col-4 my-2" key={prod.id}>
                        <CatalogItem
                            handler={handler}
                            id={prod.id}
                            name={prod.name}
                            description={prod.description}
                            price={prod.price} 
                        />
                    </div>
                ))};
            </div>
        </>
    )
}