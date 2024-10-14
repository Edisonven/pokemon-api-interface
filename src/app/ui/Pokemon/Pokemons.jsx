"use client";
import useFetchingPokemonData from "@/hooks/useFetchingPokemonData";
export default function Pokemons() {
  const { pokemons } = useFetchingPokemonData();

  console.log(pokemons);

  return (
    <section>
      <h1>Pokemons</h1>
    </section>
  );
}
