"use client";

import useFetchPokemonDetail from "@/hooks/useFetchPokemonDetail";

const PokemonDetail = ({ params }) => {
  const { id } = params;
  const { pokemonDetail } = useFetchPokemonDetail(id);

  console.log(pokemonDetail);

  return (
    <section>
      <h1>PokemonDetail</h1>
    </section>
  );
};

export default PokemonDetail;
