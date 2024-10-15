"use client";
import { IoIosArrowRoundBack } from "react-icons/io";
import useFetchPokemonDetail from "@/hooks/useFetchPokemonDetail";
import Image from "next/image";
import Link from "next/link";

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
          {pokemonDetail && pokemonDetail.name && (
            <div className="border border-gray-300 shadow-lg rounded-2xl px-5 py-1">
              <Link href="/" className="">
                <IoIosArrowRoundBack className="text-slate-800 text-[40px] hover:bg-[#00000013] rounded-lg" />
              </Link>
              <h1 className="text-slate-800 font-semibold text-2xl mb-5">
                {pokemonDetail.name.charAt(0).toUpperCase() +
                  pokemonDetail.name.slice(1)}
              </h1>
              <div className="my-2 flex flex-col gap-3">
                {pokemonDetail.types.map((type, index) => (
                  <p
                    className="text-slate-800 font-medium border border-gray-300 pb-1 shadow rounded-3xl px-2 w-max flex"
                    key={index}
                  >
                    {type.type.name}
                  </p>
                ))}
              </div>

              <div>
                <Image
                  width={300}
                  height={300}
                  className="w-full max-w-[300px]"
                  src={
                    pokemonDetail?.sprites?.other?.["official-artwork"]
                      ?.front_default
                  }
                  alt="pokemon image"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default PokemonDetail;
