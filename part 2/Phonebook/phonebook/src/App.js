import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Person from "./components/Person";
import PersonsForm from "./components/PersonsForm";
import Filter from "./components/Filter";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchKey, setSearchKey] = useState("");

useEffect(()=>{
axios.get('http://localhost:3001/persons').then(res=> setPersons(res.data))
}, [])

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    if (
      persons.find(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      alert(`${newName} is already added to Phonebook`);
      setPersons(persons);
    } else {
      setPersons(persons.concat(newPerson));
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setPersons(
      persons.filter((person) =>
        person.name.toLowerCase().includes(searchKey.toLowerCase())
      )
    );
  };

  const handleSearchKey = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} searchKey={searchKey} handleSearchKey={handleSearchKey} />
      <h2>add a new</h2>
      <PersonsForm handleName={handleName}
  handleNumber={handleNumber}
  handleSubmit={handleSubmit}
  newName={newName}
  newNumber ={newNumber}/>
      <h2>Numbers</h2>
     <Person persons={persons}/>
    </div>
  );
}

export default App;
