import Link from "next/link";
import Image from "next/image";

export default function PokemonHomeCard({ pokemon }) {
  return (
    <div
      className={`rounded shadow-md p-3 flex sm:w-[300px] bg-white justify-between ${
        pokemon?.types[0].type.name === "grass"
          ? "bg-[#3BCB01]"
          : pokemon?.types[0].type.name === "water"
          ? "bg-[#638FF0]"
          : pokemon?.types[0].type.name === "fire"
          ? "bg-[#EE8031]"
          : pokemon?.types[0].type.name === "bug"
          ? "bg-[#9CC31F]"
          : pokemon?.types[0].type.name === "normal"
          ? "bg-[#ADAB8D]"
          : pokemon?.types[0].type.name === "poison"
          ? "bg-[#AE01CB]"
          : pokemon?.types[0].type.name === "fairy"
          ? "bg-[#F9A5D1]"
          : pokemon?.types[0].type.name === "electric"
          ? "bg-[#FFD525]"
          : pokemon?.types[0].type.name === "ground"
          ? "bg-[#E5BC61]"
          : pokemon?.types[0].type.name === "fighting"
          ? "bg-[#C80000]"
          : pokemon?.types[0].type.name === "psychic"
          ? "bg-[#FE509B]"
          : pokemon?.types[0].type.name === "rock"
          ? "bg-[#C49100]"
          : pokemon?.types[0].type.name === "ghost"
          ? "bg-[#663993]"
          : pokemon?.types[0].type.name === "ice"
          ? "bg-[#88DBEC]"
          : pokemon?.types[0].type.name === "dragon"
          ? "bg-[#6622EE]"
          : pokemon?.types[0].type.name === "dark"
          ? "bg-[#494949]"
          : pokemon?.types[0].type.name === "steel"
          ? "bg-[#A6A8C6]"
          : pokemon?.types[0].type.name === "flying"
          ? "bg-[#A890FE]"
          : ""
      }`}
      key={pokemon.id}
    >
      <div>
        <p className="text-slate-800 font-semibold"># {pokemon.id}</p>
        <Image
          width={100}
          height={100}
          style={{ filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))" }}
          className="w-full max-w-[300px]"
          src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
          alt="pokemon logo"
        />
      </div>
      <div className="overflow-hidden">
        <h1 className="text-slate-800 text-center font-medium text-lg max-w-[110px] text-ellipsis whitespace-nowrap overflow-hidden">
          {pokemon?.name?.charAt(0).toUpperCase() + pokemon?.name?.slice(1)}
        </h1>
        <div className="h-[80%] flex flex-col justify-between">
          <div>
            {pokemon?.types?.map((type, index) => (
              <p className="text-slate-800" key={index}>
                {type?.type?.name}
              </p>
            ))}
          </div>
          <Link
            className="px-2 py-1 bg-red-500 rounded shadow text-gray-100 font-medium hover:bg-red-400"
            href={`/${pokemon.id}`}
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
