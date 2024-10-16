"use client";
import useFetchPokemonDetail from "@/hooks/useFetchPokemonDetail";
import PokemonDetailCard from "../ui/cards/PokemonDetailCard";
import Image from "next/image";
import Overlay from "../ui/overlay/Overlay";

const PokemonDetail = ({ params }) => {
  const { id } = params;
  const { pokemonDetail, loading } = useFetchPokemonDetail(id);

  return (
    <section className="">
      <Overlay />
      <Image
        alt="image"
        width={1000}
        height={1000}
        src="/project/detail-bg.jpeg"
        className="absolute top-0 right-0 left-0 bottom-0 w-full -z-10 h-full object-cover"
      />
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
