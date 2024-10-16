import { PokemonContext } from "@/context/PokemonContext";
import useFetchingAllPokemon from "@/hooks/useFetchingAllPokemon";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [startSearch, setStartSearch] = useState("");
  const { loading } = useFetchingAllPokemon(startSearch);
  const { setPokemonFinded, setError } = useContext(PokemonContext);

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSerachPokemon = () => {
    if (inputValue) {
      setStartSearch(inputValue);
    }
  };

  useEffect(() => {
    if (inputValue === "") {
      setStartSearch("");
      setPokemonFinded([]);
      setError("");
    }
  }, [inputValue, setError, setPokemonFinded]);

  return (
    <section className="my-3 md:ml-auto w-max ">
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            autoFocus
            value={inputValue}
            onChange={handleChange}
            type="text"
            placeholder="Busca tu pokemon..."
            className="outline-none py-1 px-3 rounded-3xl shadow pr-8 w-[280px] md:w-[400px] h-[40px]"
            maxLength={40}
          />
          <Image
            width={30}
            height={30}
            src="/pokemon-types/pokebola.png"
            alt="pokebola logo"
            className="absolute top-[5px] right-[6px]"
          />
        </div>
        <div>
          <button
            onClick={handleSerachPokemon}
            className="text-gray-100 bg-red-500 py-1 px-2 rounded shadow font-semibold hover:bg-red-400"
          >
            {loading ? "Buscando..." : "Buscar"}
          </button>
        </div>
      </div>
    </section>
  );
}
