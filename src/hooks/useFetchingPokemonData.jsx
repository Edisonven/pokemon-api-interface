import { useEffect, useState } from "react";

const useFetchingPokemonData = () => {
  const [pokemons, setPokemons] = useState([]);

  const handleFetchPokemonData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();

      setPokemons(data);

      return data;
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    handleFetchPokemonData();
  }, []);

  return {
    pokemons,
  };
};

export default useFetchingPokemonData;
