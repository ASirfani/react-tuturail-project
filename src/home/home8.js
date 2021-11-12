import BlogList from '../BlogList';
import useFetch from '../useFetch1';


const  Home7= () => {
    const {data:blogs , ispadding , err} = useFetch("http://localhost:8000/blogs")
    return (

        <div className="home3"> 
            
            {err && <div>{err}</div>}
            {ispadding && <div>loading...</div>}
            {blogs && <BlogList blogs = {blogs}  title = "All the blog"/>}

        </div>


    );
}
 



export default Home7;