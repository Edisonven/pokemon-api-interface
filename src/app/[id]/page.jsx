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
            <div className="border border-gray-100 shadow-lg rounded-2xl px-5 py-1 w-[400px] bg-white">
              <Link href="/" className="">
                <IoIosArrowRoundBack className="text-slate-800 text-[40px] hover:bg-[#00000013] rounded-lg" />
              </Link>
              <h1 className="text-slate-800 font-semibold text-2xl mb-5">
                {pokemonDetail.name.charAt(0).toUpperCase() +
                  pokemonDetail.name.slice(1)}
              </h1>
              <div className="my-2 flex items-center gap-3">
                <p className="font-semibold">Types:</p>
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
                <p className="font-semibold mb-2">Stats:</p>
                <div className="flex flex-col gap-2">
                  {pokemonDetail.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between  border-gray-300 border-b-2"
                    >
                      <p className="font-medium">
                        {stat?.stat?.name.toUpperCase()}
                      </p>
                      <p className="font-bold text-red-700">
                        {stat?.base_stat}
                      </p>
                    </div>
                  ))}
                </div>
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
