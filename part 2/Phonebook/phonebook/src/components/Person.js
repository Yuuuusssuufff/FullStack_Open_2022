import React from 'react'

const Person = ({persons, searchKey, handleDelete}) => {
  return (
    <div>{(searchKey === "" ? persons :persons.filter(person=>person.name.toLowerCase().includes(searchKey.toLowerCase()))).map((person) => (
        <div><span key={person.id}>
          {person.name}: {person.number}
        </span> <button onClick={handleDelete} id={person.id}>Delete</button></div>
      ))}</div>
  )
}

export default Person