import Link from "next/link";
import Image from "next/image";
import typeColors from "@/utils/typeColors";
import typeLogos from "@/utils/typeLogos";

export default function PokemonHomeCard({ pokemon }) {
  // Color de fondo basado en el primer tipo del array de tipos del pokemon
  const backgroundColor =
    typeColors[pokemon?.types[0]?.type?.name] || "bg-white";

  return (
    <div
      className={`rounded shadow-md p-3 flex sm:w-[300px] justify-between ${backgroundColor}`}
      key={pokemon.id}
    >
      <div>
        <p className="text-black font-semibold"># {pokemon.id}</p>
        <Image
          width={100}
          height={100}
          style={{ filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))" }}
          className="w-full max-w-[300px]"
          src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
          alt="pokemon logo"
        />
      </div>
      <div className="">
        <h1 className="text-black text-center font-medium text-lg max-w-[110px] text-ellipsis whitespace-nowrap overflow-hidden">
          {pokemon?.name?.charAt(0).toUpperCase() + pokemon?.name?.slice(1)}
        </h1>
        <div className="h-[80%] flex flex-col justify-between">
          <div className="flex items-center gap-3 mt-3">
            {pokemon?.types?.map((type, index) => (
              <div key={index} className="r">
                <Image
                  style={{
                    filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))",
                  }}
                  src={typeLogos[type?.type?.name]}
                  alt={`${type?.type?.name} logo`}
                  width={30}
                  height={30}
                />
              </div>
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
