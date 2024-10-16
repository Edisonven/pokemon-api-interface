"use client";
import useFetchingPokemonData from "@/hooks/useFetchingPokemonData";
import Pagination from "../pagination/Pagination";
import SearchBar from "../searchBar/SearchBar";
import { useContext } from "react";
import { PokemonContext } from "@/context/PokemonContext";
import PokemonHomeCard from "../cards/PokemonHomeCard";
import Loader from "../loader/Loader";

export default function Pokemons() {
  //desestructuración de los elementos definidos en el customHook del manejo de la llamada a la api
  const { pokemons, limit, setOffSet, totalCount, page, setPage, loading } =
    useFetchingPokemonData();
  const { pokemonFinded, error } = useContext(PokemonContext);

  return (
    <section className="max-w-[1400px]">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center">
          <SearchBar />
          {error ? (
            <p>{error}</p>
          ) : (
            <div className="flex items-center justify-center flex-wrap gap-5">
              {pokemonFinded.length > 0
                ? pokemonFinded.map((pokemon) => (
                    <PokemonHomeCard key={pokemon.id} pokemon={pokemon} />
                  ))
                : pokemons.map((pokemon) => (
                    <PokemonHomeCard key={pokemon.id} pokemon={pokemon} />
                  ))}
            </div>
          )}
        </div>
      )}
      <div
        className={`flex justify-center my-5 ${
          error ? "hidden" : pokemonFinded.length > 0 ? "hidden" : ""
        }`}
      >
        <div className={`${loading ? "hidden" : ""}`}>
          {/*Componente funcional que maneja la paginación, recibe las props necesarias para ejecutar la lógica*/}
          <Pagination
            limit={limit}
            setOffSet={setOffSet}
            totalCount={totalCount}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </section>
  );
}
