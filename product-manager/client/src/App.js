import './App.css';
import { Router } from "@reach/router";
import NewProduct from './controllers/NewProduct';
import DisplayOne from './controllers/DisplayOne';
import UpdateProduct from './controllers/UpdateProduct';


function App() {
  return (
    <div className="App">
      <Router>
        <NewProduct path = "/"/>
        <DisplayOne path = "/:id"/>
        <UpdateProduct path = "/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
