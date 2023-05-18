import { useState } from "react"


const Mensaje = () => {
    const [mensaje, setMensaje] = useState(false);

    const manejadorMensaje = () => {
        setMensaje(!mensaje);
    }

    return (
        <div>
            <button onClick={manejadorMensaje}> {mensaje ? "Ocultar" : "Mostrar"} </button>
            {mensaje && <p>"FabricanteZotacGPUNVIDIA GeForce RTX 3070</p>}
        </div>
    )
}

export default Mensaje