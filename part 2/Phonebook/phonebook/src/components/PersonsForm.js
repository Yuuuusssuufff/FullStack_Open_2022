import React from "react";

const PersonsForm = ({
  handleName,
  handleNumber,
  handleSubmit,
  newName,
  newNumber,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" onChange={handleName} value={newName} />
        </div>
        <div>
          number:
          <input type="number" onChange={handleNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonsForm;
