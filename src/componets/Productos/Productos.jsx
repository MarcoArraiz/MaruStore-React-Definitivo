import { useState, useEffect } from 'react';
import { getDocs, collection, query, where, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/config";

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const misProductos = query(collection(db, "inventario"), where("precio", "<", 3000));

        getDocs(misProductos)
            .then((respuesta) => {
                setProductos(respuesta.docs.map((doc) => ({
                    id: doc.id, ...doc.data
                        ()
                })));

            })
    }, [productos])

    const descontarStock = async (producto) => {
        const productoRef = doc(db, "inventario", producto.id);
        const nuevoStock = producto.stock - 1;

        await updateDoc(productoRef, { stock: nuevoStock });
    }

    return (
        <>
            <div class="container-fluid row">
                {
                    productos.map((producto) => (
                        <div class="col-lg-3 col-md-6 col-sm-12" >
                            <div class="card mt-2 shadow p-3 mb-5 bg-body rounded border-success">
                                <div class="card-body" key={producto.id}>
                                    <div class="description-container">
                                        <h2 class="card-title"> {producto.nombre} </h2>
                                        <p class="card-text">Precio: $ {producto.precio} </p>
                                        <p class="card-text">Stock: {producto.stock} </p>
                                        <button onClick={() => descontarStock(producto)} class="btn btn-dark"> Comprar </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Productos
