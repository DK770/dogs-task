import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Dog World</h1>
            <div className="links">
                <Link to="/"> All Breeds </Link>
                
                <Link to="/random"> 10 Random Pics</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;