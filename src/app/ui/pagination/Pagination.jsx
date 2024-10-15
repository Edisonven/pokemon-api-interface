import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Pagination({
  limit, // Límite de elementos por página
  setOffSet, // Función para establecer el offset de los elementos a mostrar
  totalCount, // Total de elementos disponibles en la API
  page, // Página actual
  setPage, // Función para actualizar la página actual
}) {
  // Calcula el total de páginas en función del número total de elementos y el límite por página
  const totalPages = Math.ceil(totalCount / limit);

  // Define cuántas páginas se mostrarán en la paginación
  const visiblePages = 10;

  // Calcula la página de inicio visible, asegurándose de que no sea menor que 1
  const startPage = Math.max(1, page - Math.floor(visiblePages / 2));

  // Calcula la página final visible, asegurándose de que no supere el total de páginas
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  // Función que maneja la acción de ir a la siguiente página
  const handleNext = () => {
    if (page < totalPages) {
      // Verifica si la página actual es menor que el total de páginas
      const newPage = page + 1; // Incrementa la página
      setPage(newPage); // Actualiza la página
      setOffSet((newPage - 1) * limit); // Calcula y establece el nuevo offset
    }
  };

  // Función que maneja la acción de ir a la página anterior
  const handlePrev = () => {
    if (page > 1) {
      // Verifica si la página actual es mayor que 1
      const newPage = page - 1; // Decrementa la página
      setPage(newPage); // Actualiza la página
      setOffSet((newPage - 1) * limit); // Calcula y establece el nuevo offset
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handlePrev}
        className={`${
          page === 1 ? "hidden" : ""
        } flex items-center hover:bg-slate-200 py-1 px-2 rounded transition duration-300 select-none text-slate-800 font-medium relative`}
      >
        <IoIosArrowBack />
        Anterior
      </button>

      {[...Array(endPage - startPage + 1)].map((_, index) => {
        const pageIndex = startPage + index;
        return (
          <div
            key={pageIndex}
            className={`${
              page === pageIndex ? "bg-orange-500 rounded-full" : ""
            } cursor-pointer w-7 h-7 flex items-center justify-center font-medium rounded-full hover:bg-slate-400 transition duration-300 select-none`}
            onClick={() => {
              setPage(pageIndex);
              setOffSet((pageIndex - 1) * limit);
            }}
          >
            <div className="page-link text-slate-800 font-mediu">
              {pageIndex}
            </div>
          </div>
        );
      })}

      <button
        onClick={handleNext}
        className={`${
          page === totalPages ? "disabled" : ""
        } flex items-center hover:bg-slate-200 py-1 px-2 rounded transition duration-300 select-none text-slate-800 font-medium relative`}
      >
        Siguiente
        <IoIosArrowForward />
      </button>
    </div>
  );
}
