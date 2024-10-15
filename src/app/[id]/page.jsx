"use client";
import useFetchPokemonDetail from "@/hooks/useFetchPokemonDetail";
import PokemonDetailCard from "../ui/cards/PokemonDetailCard";

const PokemonDetail = ({ params }) => {
  const { id } = params;
  const { pokemonDetail, loading } = useFetchPokemonDetail(id);

  return (
    <section className="">
      {loading ? (
        <p>cargando...</p>
      ) : (
        <div>
          {pokemonDetail && pokemonDetail.name && (
            <PokemonDetailCard pokemonDetail={pokemonDetail} />
          )}
        </div>
      )}
    </section>
  );
};

export default PokemonDetail;
