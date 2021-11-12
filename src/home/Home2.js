import { useState } from 'react';


const Home2 = () => {
    
    const [name, setName] = useState("abbas");
    const [age , setAge ] = useState(25);

    const handleClick = ()=>{
        setName("Abbas ali irfani");
        setAge(24);
    }

    return (  
        <div className="home2">
            <h2>Home 2 page</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick} >Click me</button>
        </div>

    );

}
 
export default Home2
;