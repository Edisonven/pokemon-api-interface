"use client";
import useFetchPokemonDetail from "@/hooks/useFetchPokemonDetail";
import PokemonDetailCard from "../ui/cards/PokemonDetailCard";
import Image from "next/image";
import Overlay from "../ui/overlay/Overlay";
import Loader from "../ui/loader/Loader";

const PokemonDetail = ({ params }) => {
  //parámetro de la url almacenado en una constante
  const { id } = params;
  //desestructuración de valores traídos del customHook
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
        <Loader />
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
