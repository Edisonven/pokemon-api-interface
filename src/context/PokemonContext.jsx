"use client";

import { createContext, useState, useContext } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemonFinded, setPokemonFinded] = useState([]);
  const [error, setError] = useState("");

  return (
    <PokemonContext.Provider
      value={{ pokemonFinded, setPokemonFinded, error, setError }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

// Hook para utilizar el contexto
export const usePokemonContext = () => useContext(PokemonContext);

export default PokemonProvider;
