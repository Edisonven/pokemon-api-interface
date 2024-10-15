const { useEffect, useState } = require("react");

const useFetchingAllPokemon = () => {
  const [allPokemon, setAllPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    const handleFetchingAllPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
        );
        if (!response.ok) {
          const errorData = await response.json();

          throw new Error(errorData.mewssage);
        }

        const data = await response.json();
        setAllPokemons(data.results);
        return data;
      } catch (error) {
        console.error(error.message);
      }
    };

    handleFetchingAllPokemon();
  }, []);

  return {
    allPokemon,
    filteredPokemons,
    setFilteredPokemons,
  };
};

export default useFetchingAllPokemon;
