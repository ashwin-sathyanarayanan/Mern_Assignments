import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  const persons = [
    {
    firstName: "Jane",
    lastName: "Doe",
    age: 45,
    hairColor: "Black"
    },
    {
    firstName: "John",
    lastName: "Smith",
    age: 88,
    hairColor: "Brown"
    },
    {
    firstName: "Millard",
    lastName: "Fillmore",
    age: 50,
    hairColor: "Brown"
    },
    {
    firstName: "Maria",
    lastName: "Smith",
    age: 62,
    hairColor: "Brown"
    }
  ]
  return (
    <div className="App">
      {persons.map((element, index) => (
        <PersonCard 
          key = {index}
          firstName = {element.firstName} 
          lastName = {element.lastName}
          age = {element.age}
          hairColor = {element.hairColor}
        />
      ))}
    </div>
  );
}

export default App;
