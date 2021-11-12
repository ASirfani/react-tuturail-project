const Home = () => {
    const handleClick = (e) => {
        console.log("Hello" , e);
    }

    const clickAgain = (name,e) => {
        console.log("Hello " + name , e.target);

    }
    return ( 
        <div className="home">
            <h2>The home Component</h2>

            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=> clickAgain("abbas",e)} >click me again</button>
        </div>
     );
}
 
export default Home;
