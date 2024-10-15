"use client";
import useFetchingPokemonData from "@/hooks/useFetchingPokemonData";
export default function Pokemons() {
  const { pokemons } = useFetchingPokemonData();

  console.log(pokemons);

  return (
    <section>
      <div>
        {pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <h1 className="text-gray-300">{pokemon.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}
