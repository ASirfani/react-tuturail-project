import {useState} from 'react';
import BlogList from './BlogList';


const  Home4= () => {
    
    const [blogs , setBlogs] = useState([
        {title:"the new blog website", body: " the first blog is this..." , author: "ahmad" , id:1 },
        {title:"Welcome to the react blog", body: " the second blog is this..." , author: "ali" , id:2 },
        {title:"React is the freamwork of java script", body: " the third blog is this..." , author: "reza" , id:3 },
        {title:"everythin is posible", body: " the fourth blog is this..." , author: "ali" , id:4 },
        {title:"must to start", body: " the fifth blog is this..." , author: "jamshed" , id:5 }
    ]);
    
    return (  

        <div className="home3">

           <BlogList blogs = {blogs} title = "All the blog"/>

           <BlogList blogs = {blogs.filter((blog)=> blog.author==="ali")} title = "The ali blogs"/>
        </div>


    );
}
 



export default Home4;