"use client";
import useFetchingPokemonData from "@/hooks/useFetchingPokemonData";
import Image from "next/image";
import Pagination from "../pagination/Pagination";
import Link from "next/link";
import SearchBar from "../searchBar/SearchBar";

export default function Pokemons() {
  //desestructuración de los elementos definidos en el customHook del manejo de la llamada a la api
  const { pokemons, limit, setOffSet, totalCount, page, setPage, loading } =
    useFetchingPokemonData();

  return (
    <section className="max-w-[1400px]">
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          <SearchBar />
          <div className="flex items-center justify-center flex-wrap gap-5">
            {pokemons.map((pokemon) => (
              <div
                className=" rounded shadow-md p-3 flex w-[300px] justify-between bg-white"
                key={pokemon.id}
              >
                <div className="">
                  <p className="text-slate-800 font-semibold"># {pokemon.id}</p>
                  <Image
                    width={100}
                    height={100}
                    className="w-full max-w-[300px]"
                    src={
                      pokemon?.sprites?.other?.["official-artwork"]
                        ?.front_default
                    }
                    alt="pokemon logo"
                  />
                </div>
                <div className="h-full">
                  <h1 className="text-slate-800 text-center font-medium text-lg">
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </h1>
                  <div className="">
                    {pokemon.types.map((type, index) => (
                      <p className="text-slate-800" key={index}>
                        {type.type.name}
                      </p>
                    ))}
                    <Link
                      className="px-2 py-1 bg-red-500 rounded shadow text-gray-200 font-medium hover:bg-red-400"
                      href={`/${pokemon.id}`}
                    >
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-center my-5">
        {/*Componente funcional que maneja la paginación, recibe las props necesarias para ejecutar la lógica*/}
        <Pagination
          limit={limit}
          setOffSet={setOffSet}
          totalCount={totalCount}
          page={page}
          setPage={setPage}
        />
      </div>
    </section>
  );
}
