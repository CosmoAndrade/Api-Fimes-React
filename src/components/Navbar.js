
import { NavLink } from "react-router-dom";

const Navbar = () => {

    
    
    return ( 
        
        <navbar className="navbar bg-primary">
        
        <NavLink to="/" className="nav-link">
             <h1 className='navbar-brand text-white mx-4'>PrimeFlix</h1>
        </NavLink>

       

        <NavLink to="/filme" className="nav-link">
            <a href="" className="nav-link bg-light mx-4 rounded"> Detalhes</a>
        </NavLink>

    </navbar>
     );
}
 
export default Navbar;