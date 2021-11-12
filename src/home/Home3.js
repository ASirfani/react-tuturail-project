import {useState} from 'react';


const  Home3= () => {
    
    const [blogs , setBlogs] = useState([
        {title:"the new blog website", body: " the first blog is this..." , author: "ahmad" , id:1 },
        {title:"Welcome to the react blog", body: " the second blog is this..." , author: "ali" , id:2 },
        {title:"React is the freamwork of java script", body: " the third blog is this..." , author: "reza" , id:3 },
        {title:"everythin is posible", body: " the fourth blog is this..." , author: "ramin" , id:4 },
        {title:"must to start", body: " the fifth blog is this..." , author: "jamshed" , id:5 }
    ]);
    
    return (  

        <div className="home3">

            {blogs.map(
                (blog)=>(
                    <div className="blog-preivew" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <h5>{blog.author}</h5>
                 </div>
                ))}
        </div>


    );
}
 



export default Home3;