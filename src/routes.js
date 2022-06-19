import { BrowserRouter ,Routes , Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Filme from "./pages/Filme";
import Home from "./pages/Home";


const Rotas = () => {

    return ( 
        
      <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme" element={<Filme/>} />

          <Route path="" element={''} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
     );
}
 
export default Rotas;