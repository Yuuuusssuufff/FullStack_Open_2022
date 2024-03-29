import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Person from "./components/Person";
import PersonsForm from "./components/PersonsForm";
import Filter from "./components/Filter";

function App() {
  const [persons, setPersons] = useState([
    // { name: "Arto Hellas", number: "040-123456", id: 1 },
    // { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    // { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    // { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const url = "http://localhost:3001/api/persons";

  useEffect(() => {
    axios.get(url).then((res) => setPersons(res.data));
  }, [persons]);

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
    axios
      .post(url, newPerson)
      .then((resp) => console.log(resp.data, "is added"));
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

  const handleDelete = (e) => {
    const id = e.target.id;
    // console.log(id);
    const url = `http://localhost:3001/api/persons/${id}`;
    axios.delete(url).then((resp) => {
      return
    });
    (setPersons(prev => prev.filter(p => p.id !== id)))
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleSearchKey = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handleSearch={handleSearch}
        searchKey={searchKey}
        handleSearchKey={handleSearchKey}
      />
      <h2>add a new</h2>
      <PersonsForm
        handleName={handleName}
        handleNumber={handleNumber}
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Person
        persons={persons}
        searchKey={searchKey}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
