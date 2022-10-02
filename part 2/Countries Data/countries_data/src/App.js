import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const Filter = ({ handleSearch, search }) => {
  return (
    <div>
      <form>
        <label htmlFor="search">find countries</label>
        <input id="search" onChange={handleSearch} value={search} />
      </form>
    </div>
  );
};

function App() {
  const [countryData, setCountryData] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountryData(res.data);
    });
  }, []);

  const handleSearch = (e) => {
    const filteredCountries =
      search === ""
        ? countryData
        : countryData.filter((country) =>
            country.name.common.toLowerCase().includes(search.toLowerCase())
          );

    setSearch(e.target.value);
    setFiltered(filteredCountries);
  };
  const handleShow = (e) => {
    setSearch(e.target.name);
    console.log("happy happy");
    return <div></div>;
  };

  return (
    <div className="App">
      <Filter search={search} handleSearch={handleSearch} />
      <div>
        {filtered.length === 1 ? (
          <div>
            {filtered.map((count) => (
              <div key={count.id}>
                <h2 key={count.id}>{count.name.common}</h2>
                <p>capital {count.capital}</p>
                <p> area {count.area}</p>
                <h2>Languages</h2>
                <ul>
                  {Object.keys(count.languages).map((lang) => (
                    <li key={lang}>{lang}</li>
                  ))}
                </ul>
                <img src={count.flags.png} alt="flag" />
              </div>
            ))}
          </div>
        ) : filtered.length <= 10 ? (
          filtered.map((count) => {
            return (
              <div key={count.id} id={count.id} name={count.name.common}>
                <p>{count.name.common}</p>
                <button onClick={() => handleShow()} id={count.id}>
                  show
                </button>
              </div>
            );
          })
        ) : filtered.length > 10 ? (
          "Too many matches, try another filter"
        ) : (
          "none"
        )}
      </div>
    </div>
  );
}

export default App;
