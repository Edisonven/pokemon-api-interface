"use client";
import { createContext, useState, useContext } from "react";

//Creación de contexto para manejo de estado global
export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  //Estados generados en estado global para ser utilizados donde sea requerido
  const [pokemonFinded, setPokemonFinded] = useState([]);
  const [error, setError] = useState("");
  const [limit, setLimit] = useState(20);
  const [offSet, setOffSet] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <PokemonContext.Provider
      //Valores pasados al provider para ser consumidos
      value={{
        pokemonFinded,
        setPokemonFinded,
        error,
        setError,
        limit,
        setLimit,
        offSet,
        setOffSet,
        totalCount,
        setTotalCount,
        page,
        setPage,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

// Hook para utilizar el contexto
export const usePokemonContext = () => useContext(PokemonContext);

export default PokemonProvider;
