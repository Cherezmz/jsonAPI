import React from 'react';
import './App.css';
import SearchCountry from "./components/SearchCountry"
import SearchCapital from "./components/SearchCapital"
import CreateCountry from "./components/CreateCountry"

function App() {
  return (
    <div className="App">

      <section className="3buttons">
        <SearchCountry />
        <SearchCapital />
        <CreateCountry />
      </section>

    </div>
  );
}

export default App;
