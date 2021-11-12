import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 

        <nav className="navbar">
            <h1>The Abbas Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/show">show</Link>
            </div>
        </nav>

     );
}
 
export default Navbar;


