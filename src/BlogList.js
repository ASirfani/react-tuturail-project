
import { Link } from "react-router-dom";
const BlogList = ({blogs, title , handleDelete}) => {
    
    // const blogs = props.blogs;
    // const title = props.title;
    return (

        <div className= "blog-list">
            <h2>{title}</h2>
        {blogs.map(
            (blog)=>(
                
                <div className="blog-preivew" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <h5><small>{blog.author}</small></h5>
                        <p>{blog.body.slice(0,20)}</p>
                    </Link>
             </div>


            ))}

        </div>

    );
}
 
export default BlogList;