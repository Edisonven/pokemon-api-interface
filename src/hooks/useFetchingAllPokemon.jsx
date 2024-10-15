import { PokemonContext } from "@/context/PokemonContext";

const { useEffect, useContext, useState } = require("react");

const useFetchingAllPokemon = (startSearch) => {
  const { setPokemonFinded, setError } = useContext(PokemonContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetchingAllPokemon = async () => {
      if (startSearch) {
        setLoading(true);
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${startSearch.toLowerCase()}`
          );
          if (!response.ok) {
            const errorData = await response.json();

            throw new Error(errorData.mewssage);
          }

          const data = await response.json();
          setError("");
          setPokemonFinded([data]);
          return data;
        } catch (error) {
          console.error(error.message);
          setError("No pudimos encontrar tu pokemon, intenta nuevamente");
        } finally {
          setLoading(false);
        }
      }
    };

    handleFetchingAllPokemon();
  }, [startSearch]);

  return {
    loading,
  };
};

export default useFetchingAllPokemon;
