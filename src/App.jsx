import './App.css';
import Productos from "./componets/Productos/Productos";
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componets/NavBar/NavBar';
import Footer from './componets/Footer/Footer';
import Cart from './componets/Cart/Cart';
import Formulario from './componets/Formulario/Formulario';
import { CarritoProvider } from './context/CarritoContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='*' element={<h2>Sitio en Construccion </h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
      <Productos />
      <Formulario />
      <Footer />

    </>
  );
}

export default App;