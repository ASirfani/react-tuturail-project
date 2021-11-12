import {useState , useEffect} from 'react';
import BlogList from './BlogList';


const  Home6= () => {
    
    const [blogs , setBlogs] = useState(null);
    
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter( blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // } 
    const [ispadding, setPadding] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:8000/blogs").then (res=> res.json())
            .then(data=>{
                setPadding(false);
                console.log(data);
                setBlogs(data);
               
            });
        },1000);
        
    } , []);
    
    return (  

        <div className="home3"> 
            {ispadding && <div>loading...</div>}
            {blogs && <BlogList blogs = {blogs}  title = "All the blog"/>}


           {/* <BlogList blogs = { blogs} handleDelete = {handleDelete} blogs = {blogs.filter((blog)=> blog.author==="ali")}  title = "The ali blogs"/>

            <button onClick = {()=> { setName("abbas ali irfani")}}> click here</button> */}

        </div>


    );
}
 



export default Home6;