
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Tipos from "./pages/Tipos";
import Nuevo from "./pages/Nuevo";


function App() {
 

  return (
    <div>
      


      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="tipos" element={<Tipos />} />
          <Route path="nuevo" element={<Nuevo />} />


        </Route>


      </Routes>
    </div>
  );
}

export default App;
