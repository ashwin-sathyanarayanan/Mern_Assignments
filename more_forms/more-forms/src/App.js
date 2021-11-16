import logo from './logo.svg';
import './App.css';
import {useState, onChange} from "react"

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  return (
    <div className="App">
      <form>
        <h1>Person Form</h1>
        <div>
          First Name: 
          <input type = "text" onChange = {(e) => setFname(e.target.value)}/>
          {fname.length < 2 && (<p style = {{color: "red"}}>First name must be atleast 2 characters long </p>)}
          Last Name: 
          <input type = "text" onChange = {(e) => setLname(e.target.value)}/>
          {lname.length < 2 && (<p style = {{color: "red"}}>Last name must be atleast 2 characters long </p>)}
          Email:
          <input type = "email" onChange = {(e) => setEmail(e.target.value)}/>
          {email.length < 2 && (<p style = {{color: "red"}}>Email must be atleast 2 characters long </p>)}
          Password:
          <input type = "password" onChange = {(e) => setPw(e.target.value)}/>
          {pw.length < 8 && (<p style = {{color: "red"}}>Password must be atleast 8 characters long </p>)}
          Confirm Password:
          <input type = "password" onChange = {(e) => setConfirmPw(e.target.value)}/>
          {confirmPw !== pw && (<p style = {{color: "red"}}>Password and Confirm Password must match </p>)}
        </div>
      </form>
    </div>
  );
}

export default App;
