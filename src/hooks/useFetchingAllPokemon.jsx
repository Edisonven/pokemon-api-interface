import { PokemonContext } from "@/context/PokemonContext";

const { useEffect, useContext } = require("react");

const useFetchingAllPokemon = (startSearch) => {
  const { setPokemonFinded, setError } = useContext(PokemonContext);

  useEffect(() => {
    const handleFetchingAllPokemon = async () => {
      setError("");
      if (startSearch) {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${startSearch.toLowerCase()}`
          );
          if (!response.ok) {
            const errorData = await response.json();

            throw new Error(errorData.mewssage);
          }

          const data = await response.json();

          setPokemonFinded([data]);
          return data;
        } catch (error) {
          console.error(error.message);
          setError("No pudimos encontrar tu pokemon, intenta nuevamente");
        }
      }
    };

    handleFetchingAllPokemon();
  }, [startSearch]);
};

export default useFetchingAllPokemon;
