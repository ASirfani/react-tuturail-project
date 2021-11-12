import Navbar from "./Navbar";
// import Hom from "./Hom";
// import Home from "./Home";
// import Home2 from "./Home2";
// import Home3 from "./Home3";
// import Home4 from "./Home4";
// import Home5 from "./Home5";
// import Home6 from "./Home6";
import Home7 from "./home/home8";
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Create from "./Create";
import Show from "./Show";
import BlogsDetails from "./BlogsDetail";
import NOTFOUNT from "./NotFoun";


function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>

            <Route exact path="/">
                    {/* <Home />
                    <br />
                    <br />
                    <br />
                    {/* <h2>Home 2</h2> */}
                    {/* <Home2 /> */}

                    {/* <br />
                    <br />
                    <br /> */}

                    {/* <Home3 /> */}

                    {/* <br />
                    <br />
                    <br /> */} 

                    {/* <Home /> */}

                    {/* <br /> */}

                    {/* <Home4 /> */}

                    {/* <Home5 />             */}
                    {/* <Home6 /> */}

                    <Home7 />

                </Route>

                <Route path="/create">
                  <Create />
                </Route>

                <Route path="/show">
                    <Show />
                </Route>

                <Route path="/blogs/:id">
                    <BlogsDetails />
                </Route>
                <Route path="*">
                    <NOTFOUNT />
                </Route>
                
        </Switch>     
      </div>
      </div>
    </Router>
    );

}

export default App;
