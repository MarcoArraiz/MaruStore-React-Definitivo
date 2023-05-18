const productos = [
    { nombre: "Asus Tuf RTX 4090", precio: 2200, id: "1", img: "./img/gpu/asus-tuf-rtx4090.png", idCat: "1" },
    { nombre: "EVGA RTX 3080TI xc3", precio: 800, id: "2", img: "./img/gpu/evga-rtx-3080ti-xc3.png", idCat: "1" },
    { nombre: "Gigabyte Aorus RX6900XT", precio: 700, id: "3", img: "./img/gpu/gigabyte-aorus-radeon-rx-6900xt-master.png", idCat: "1" },
    { nombre: "Gigabyte RTX 3080TI Vision", precio: 850, id: "4", img: "./img/gpu/gigabyte-rtx-3080ti-vision-oc.png", idCat: "1" },
    { nombre: "Zotac RTX 3070 Trinity", precio: 500, id: "5", img: "./img/gpu/zotac-rtx-3070-trinity.png", idCat: "1" },
    { nombre: "Gigabyte RTX 4070 WF", precio: 1200, id: "6", img: "./img/gpu/gigabyte-rtx-4070-windforce.png", idCat: "1" },
    
    { nombre: "Asus Rog Falchion", precio: 80, id: "7", img: "./img/teclados/asus-rog-falchion.png", idCat: "2" },
    { nombre: "Hyperx alloy origins", precio: 80, id: "8", img: "./img/teclados/kingston-hyperx-alloy-origins.png", idCat: "2" },
    { nombre: "Varmilo ma87m koi", precio: 80, id: "9", img: "./img/teclados/varmilo-ma87m-koi.png", idCat: "2" },
    { nombre: "Royal kludge rk61", precio: 80, id: "10", img: "./img/teclados/royal-kludge-rk61.png", idCat: "2" },
    { nombre: "Logitech G pro LOL Edition", precio: 80, id: "11", img: "./img/teclados/logitech-g-pro-league-og-legends.png", idCat: "2" },
    { nombre: "Hyperx Alloy Origin Pink", precio: 80, id: "12", img: "./img/teclados/hyperx-alloy-origins-pink.png", idCat: "2" },
    
    { nombre: "AMD A12 9800", precio: 80, id: "13", img: "./img/procesadores/amd-a12-9800.png", idCat: "3" },
    { nombre: "AMD Ryzen 3 2200g", precio: 80, id: "14", img: "./img/procesadores/amd-ryzen-3-2200g.png", idCat: "3" },
    { nombre: "AMD Ryzen 5 5600X", precio: 80, id: "15", img: "./img/procesadores/amd-ryzen-5-5600x.png", idCat: "3" },
    { nombre: "Intel Celeron G4930", precio: 80, id: "16", img: "./img/procesadores/intel-celeron-g4930.png", idCat: "3" },
    { nombre: "Intel Core i3 9100", precio: 80, id: "17", img: "./img/procesadores/intel-core-i3-9100.png", idCat: "3" },
    { nombre: "AMD Ryzen 7 7700X", precio: 80, id: "18", img: "./img/procesadores/amd-ryzen-7-7700x.png", idCat: "3" },
    
    { nombre: "Logitech Hero G502", precio: 80, id: "19", img: "./img/mouse/logitech-g502.png", idCat: "4" },
    { nombre: "Logitech GPRO LOL Edition", precio: 80, id: "20", img: "./img/mouse/logitech-g-pro-wireless-league-of-legends-edition.png", idCat: "4" },
    { nombre: "Razer Basilisk V3", precio: 80, id: "21", img: "./img/mouse/razer-basilisk-v3.png", idCat: "4" },
    { nombre: "Razer Deathadder V3 PRO", precio: 80, id: "22", img: "./img/mouse/razer-deathadder-v3-pro.png", idCat: "4" },
    { nombre: "Redragon M901 Perdition Black", precio: 23, id: "23", img: "./img/mouse/redragon-m901-perdition-black.png", idCat: "4" },
    { nombre: "Asus Rog Keris Eva Edition", precio: 80, id: "24", img: "./img/mouse/asus-rog-keris-wireless-eva-edition.png", idCat: "4" }
    
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}