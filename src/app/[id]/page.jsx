"use client";

import useFetchPokemonDetail from "@/hooks/useFetchPokemonDetail";

const PokemonDetail = ({ params }) => {
  const { id } = params;
  const { pokemonDetail, loading } = useFetchPokemonDetail(id);

  console.log(pokemonDetail);

  return (
    <section className="">
      {loading ? (
        <p>cargando...</p>
      ) : (
        <div>
          {pokemonDetail && pokemonDetail.name ? (
            <h1 className="text-gray-300 font-semibold">
              {pokemonDetail.name.charAt(0).toUpperCase() +
                pokemonDetail.name.slice(1)}
            </h1>
          ) : (
            ""
          )}
        </div>
      )}
    </section>
  );
};

export default PokemonDetail;
