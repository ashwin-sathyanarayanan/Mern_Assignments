import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router'
import Home from './components/Home';
import DisplayNumber from './components/DisplayNumber';
import DisplayWord from './components/DisplayWord';


function App() {
  return (
    <div className="App">
      <Router> 
        <Home path= "/home" />
        <DisplayNumber path = "/:num" />
        <DisplayWord path = '/:word' />
        <DisplayWord path = '/:word/:color1/:color2' />
      </Router>
    </div>
  );
}

export default App;
