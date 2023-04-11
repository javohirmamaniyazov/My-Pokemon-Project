import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Card/Card'
import { Container } from '@mui/system';
import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Skeletons } from './Components/Sceleteons/Sceleteon';
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 501; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    setPokemons(filteredPokemons);
  };

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth={false}>
        <Grid  container spacing={3}>
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            pokemons.map((pokemon, key) => (
              <Grid item xs={8} sm={6} md={3} lg={1.5} key={key}>
                <Card 
                  name={pokemon.data.name} 
                  image={pokemon.data.sprites.front_default}
                  hp={pokemon.data.stats[0].base_stat} 
                  attack={pokemon.data.stats[1].base_stat}
                  defense={pokemon.data.stats[2].base_stat}
                  />
              </Grid>
              
            ))
          )}
        </Grid>
      </Container>
    </div >
  );
}

export default App;