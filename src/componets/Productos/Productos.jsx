import React from 'react'
import { useState, useEffect } from 'react'

import { getDocs, collection, query } from 'firebase/firestore'


const Productos = () => {
    const [productos, setProductos] = useState([]);
    return (
        <div>
            {
                productos.map((producto) => (
                    <div className='producto-card' key={producto.id}>
                        <h2>{producto.nombre} </h2>
                        
                    <div/>
                ))
            }
        </div>
    )
}

export default Productos
