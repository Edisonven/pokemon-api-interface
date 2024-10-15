import Link from "next/link";
import Image from "next/image";

export default function PokemonHomeCard({ pokemon }) {
  return (
    <div
      className="rounded shadow-md p-3 flex sm:w-[300px] justify-between bg-white"
      key={pokemon.id}
    >
      <div>
        <p className="text-slate-800 font-semibold"># {pokemon.id}</p>
        <Image
          width={100}
          height={100}
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
