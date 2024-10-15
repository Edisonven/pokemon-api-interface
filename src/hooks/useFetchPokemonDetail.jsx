import { useEffect, useState } from "react";

const useFetchPokemonDetail = (id) => {
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetchPokemonDetail = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!response.ok) {
          const errorData = await response.json();

          throw new Error(errorData.mewssage);
        }

        const data = await response.json();
        setPokemonDetail(data);
        return data;
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    handleFetchPokemonDetail();
  }, [id]);

  return {
    pokemonDetail,
    loading,
  };
};

export default useFetchPokemonDetail;
