import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NoFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Home/>
          {/* <BlogDetails/> */}
          <Create/>
        </div>
      </div>
    </Router>
  );
}

export default App;
