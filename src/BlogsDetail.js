import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch1";
const BlogsDetails = () => {
    const {id} = useParams();
    const {data:blog , err , ispadding} = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();

    const handleDelete = ()=>{

        fetch("http://localhost:8000/blogs/"+blog.id , {
            method:"DELETE"
        }).then(()=>{
            
            history.push('/');


        });

    }
    return ( 

        <div className="blog-detail">
            {ispadding && <div> loading ... </div>}
            {err && <div> {err} </div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <h6>{blog.author}</h6>
                    <p>{blog.body}</p>
                    <button onClick = {handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogsDetails;