import React from 'react'

const Person = ({persons, searchKey}) => {
  return (
    <div>{(searchKey === "" ? persons :persons.filter(person=>person.name.toLowerCase().includes(searchKey.toLowerCase()))).map((person) => (
        <p key={person.id}>
          {person.name}: {person.number}
        </p>
      ))}</div>
  )
}

export default Person