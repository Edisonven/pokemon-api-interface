import { useEffect, useState } from "react";

const useFetchingPokemonData = () => {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(20);
  const [offSet, setOffSet] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleFetchPokemonData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offSet}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        const data = await response.json();
        setTotalCount(data.count);

        const promises = data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          return data;
        });

        const results = await Promise.all(promises);
        setPokemons(results);
        return results;
      } catch (error) {
        console.error(error.message);
      }
    };

    handleFetchPokemonData();
  }, [offSet, limit]);

  return {
    pokemons,
    limit,
    setOffSet,
    totalCount,
    setLimit,
    page,
    setPage,
  };
};

export default useFetchingPokemonData;
