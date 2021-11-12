import { Link } from "react-router-dom";

const NOTFOUNT = () => {
    return ( 
        <div>
            <h2>Sorry</h2>
            <p>the page is not founded</p>
            <Link to="/">back to home page</Link>
        </div>
     );
}
 
export default NOTFOUNT;