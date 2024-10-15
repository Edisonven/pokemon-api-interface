"use client";
import useFetchingPokemonData from "@/hooks/useFetchingPokemonData";
import Image from "next/image";

export default function Pokemons() {
  const { pokemons } = useFetchingPokemonData();

  console.log(pokemons);

  return (
    <section className="max-w-[1400px]">
      <div className="flex items-center justify-center flex-wrap gap-3">
        {pokemons.map((pokemon) => (
          <div
            className="border rounded shadow p-3 flex w-[300px] justify-between"
            key={pokemon.id}
          >
            <div className="">
              <p className="text-gray-300 font-semibold"># {pokemon.id}</p>
              <Image
                width={100}
                height={100}
                className="w-full max-w-[300px]"
                src={
                  pokemon?.sprites?.other?.["official-artwork"]?.front_default
                }
                alt="pokemon logo"
              />
            </div>
            <div>
              <h1 className="text-gray-300 text-center font-medium text-lg">
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </h1>
              <div>
                {pokemon.types.map((type, index) => (
                  <p className="text-gray-300" key={index}>
                    {type.type.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
