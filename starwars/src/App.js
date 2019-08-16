import React, { useState, useEffect } from 'react';
import './App.css';
import CardProducer from "./components/CardProducer"
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

const [starWars, setStarWars] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        setStarWars(response.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        <div className="card-containment">
            {starWars.map(char => {
                return <CardProducer key={char.name} char={char} />;
            })}
        </div>
    </div>
  );
};

export default App;
