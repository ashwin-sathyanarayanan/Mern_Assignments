import './App.css';
import { Router } from "@reach/router";
import DisplayAll from './controllers/DisplayAll';
import NewAuthor from './controllers/NewAuthor';


function App() {
  return (
    <div className="App">
      <Router>
        <DisplayAll path = "/"/>
        <NewAuthor path = "/new"/>
        {/* <DisplayOne path = "/:id"/>
        <UpdateProduct path = "/:id/edit"/> */}
      </Router>
    </div>
  );
}

export default App;
