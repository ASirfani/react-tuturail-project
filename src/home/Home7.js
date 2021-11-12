import {useState , useEffect} from 'react';
import BlogList from './BlogList';


const  Home7= () => {
    
    const [blogs , setBlogs] = useState(null);
    
    
    const [ispadding, setPadding] = useState(true);
    const [err, seterr] = useState(null);


    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:8000/blogs")
                .then(res => {
                    if(!res.ok){
                        throw Error("the connection data is not connected " + res.status);
                    }
                    return res.json()
                })
                .then(data=>{
                    setPadding(false);
                    setBlogs(data);
                    seterr(null);
                })
                .catch(err=> {
                    setPadding(false);
                    seterr(err.message);
                    
                });
        },1000);
        
    } , []);
    
    return (  

        <div className="home3"> 
            {err && <div>{err}</div>}
            {ispadding && <div>loading...</div>}
            {blogs && <BlogList blogs = {blogs}  title = "All the blog"/>}


           {/* <BlogList blogs = { blogs} handleDelete = {handleDelete} blogs = {blogs.filter((blog)=> blog.author==="ali")}  title = "The ali blogs"/>

            <button onClick = {()=> { setName("abbas ali irfani")}}> click here</button> */}

        </div>


    );
}
 



export default Home7;