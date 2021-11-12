import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
  
  const [title,setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('abbas');
  const history = useHistory();
  
  const [ispending , setIspending] = useState(false);
  const handleSubmit = (e)=>{
    e.preventDefault();
    setIspending(true);
    const blog = {title,body,author};

    fetch("http://localhost:8000/blogs",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(blog)
    }).then(()=>{
      console.log("new blog added");
      setIspending(false);
      // history.go(-1);
      history.push('/');
    })


  };


  return (

    <div className="create">
      <h2>Add A New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label >Blog title: </label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
           />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e)=>setBody(e.target.value)}
        ></textarea>
        <label >Blog author:
        </label>
        <select 
          value={author}
          onChange = {e=>setAuthor(e.target.value)}
                >
            <option value="abbas">abbas</option>
            <option value="ali">ali</option>
            <option value="mahmod">mahmod</option>
                </select>
        {!ispending && <button>Add Blog</button>}
        {ispending && <button disabled >adding blog</button>}
      </form>

    </div>

        
      );
}
 
export default Create;
