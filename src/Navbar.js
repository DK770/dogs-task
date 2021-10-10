import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/"> All Breeds </Link>
                <br/>
                <Link to="/random"> 10 Random Pics</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;