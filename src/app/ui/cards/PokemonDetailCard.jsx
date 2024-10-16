import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import typeColors from "@/utils/typeColors";

export default function PokemonDetailCard({ pokemonDetail }) {
  const backgroundColor =
    typeColors[pokemonDetail?.types[0]?.type?.name] || "bg-white";

  return (
    <div
      className={`border border-gray-100 shadow-lg rounded-2xl px-5 py-1 sm:w-[430px] ${backgroundColor}`}
    >
      <Link href="/" className="">
        <IoIosArrowRoundBack className="text-gray-100 text-[40px] hover:bg-[#00000013] rounded-lg" />
      </Link>
      <h1 className="text-gray-100 font-semibold text-2xl mb-5">
        {pokemonDetail.name.charAt(0).toUpperCase() +
          pokemonDetail.name.slice(1)}
      </h1>
      <div className="my-2 flex items-center gap-3">
        <p className="font-semibold text-gray-100">Types:</p>
        {pokemonDetail.types.map((type, index) => (
          <p
            className="text-gray-100 font-medium border border-gray-300 pb-1 shadow rounded-3xl px-2 w-max flex"
            key={index}
          >
            {type.type.name}
          </p>
        ))}
      </div>
      <div>
        <p className="font-semibold mb-2 text-gray-100">Stats:</p>
        <div className="flex flex-col gap-2">
          {pokemonDetail.stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-between  border-gray-300 border-b-2"
            >
              <p className="font-medium text-gray-100">
                {stat?.stat?.name.toUpperCase()}
              </p>
              <p className="font-bold text-red-500">{stat?.base_stat}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Image
          width={300}
          height={300}
          className="w-full max-w-[300px]"
          style={{ filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.7))" }}
          src={
            pokemonDetail?.sprites?.other?.["official-artwork"]?.front_default
          }
          alt="pokemon image"
        />
      </div>
    </div>
  );
}
