import { useEffect, useState } from "react";

//custom hook con la llamada a la api
const useFetchingPokemonData = () => {
  //estados locales para funcionalidades: datos de pokemones, limite de datos por página, offset(valor que se actualiza según la página actual), cuenta total de pokemones y página
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(20);
  const [offSet, setOffSet] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // hook de efecto secundario que se vuelve a ejecutar cada vez que cambia alguna de suss dependencias
  useEffect(() => {
    //función que realiza la operación asíncrona para traer los datos de la api
    const handleFetchPokemonData = async () => {
      setLoading(true);
      //implementamos try catch para capturar cualquier error que poueda ocurrir en la operación asíncrona
      try {
        //constante que almacena la respuesta (promesa) al endpoint de la api
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offSet}`
        );

        //acá validamos que si la respuesta no sale bien, crée un error para detener la ejecución del resto del código, y envié el error al catch  para notificar que algo salió mal
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }
        //si la respuesta sale bien, parseamos la respuesta para poder trabajar con los datos
        const data = await response.json();

        //actualizamos el estado con la key count de la respuesta que contiene el valor total de pokemones
        setTotalCount(data.count);

        //creamos una constante para almacenar todas las promesas de las url de cada pokemon que contiene toda la información de dicho pokemon
        const promises = data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          return data;
        });
        //en una constante results, almacenamos la resolución de todas las promesas para trabajar con los datos obtenidos de cada fetchiing a la url interna del pokemon
        const results = await Promise.all(promises);
        //actualizamos el estado con los resultados de la resolución
        setPokemons(results);
        return results;
      } catch (error) {
        //capturamos cualquier error que pueda ocurrir en el proceso
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    handleFetchPokemonData();
    //arreglo de dependencias para volver a ejecutar el efecto secundario
  }, [offSet, limit]);

  //objeto que contiene los estados con el manejo de cada uno de ellos
  return {
    pokemons,
    limit,
    setOffSet,
    totalCount,
    setLimit,
    page,
    setPage,
    loading,
  };
};

export default useFetchingPokemonData;
