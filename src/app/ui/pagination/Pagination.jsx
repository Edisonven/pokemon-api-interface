import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export default function Pagination({
  limit, // Límite de elementos por página
  setOffSet, // Función para establecer el offset de los elementos a mostrar
  totalCount, // Total de elementos disponibles en la API
  page, // Página actual
  setPage, // Función para actualizar la página actual
}) {
  // Calcula el total de páginas en función del número total de elementos y el límite por página
  const totalPages = Math.ceil(totalCount / limit);
  const [visiblePages, setVisiblePages] = useState(3);

  useEffect(() => {
    // Define cuántas páginas se mostrarán en la paginación basado en el ancho de la ventana
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisiblePages(3);
      } else {
        setVisiblePages(10);
      }
    };

    // Llamar la función de resize al montar el componente
    handleResize();

    // Agregar listener para cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calcula la página de inicio visible, asegurándose de que no sea menor que 1
  const startPage = Math.max(1, page - Math.floor(visiblePages / 2));

  // Calcula la página final visible, asegurándose de que no supere el total de páginas
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  // Función que maneja la acción de ir a la siguiente página
  const handleNext = () => {
    if (page < totalPages) {
      const newPage = page + 1; // Incrementa la página
      setPage(newPage); // Actualiza la página
      setOffSet((newPage - 1) * limit); // Calcula y establece el nuevo offset
    }
  };

  // Función que maneja la acción de ir a la página anterior
  const handlePrev = () => {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
      setOffSet((newPage - 1) * limit);
    }
  };

  // Función que maneja la acción de ir a la última página
  const handleLastPage = () => {
    if (page < totalPages) {
      setPage(totalPages);
      setOffSet((totalPages - 1) * limit);
    }
  };

  // Función que maneja la acción de volver a la primera página
  const handleFirstPage = () => {
    if (page > 1) {
      setPage(1);
      setOffSet(0);
    }
  };

  return (
    <div className="flex items-center gap-1 sm:gap-3">
      <button
        onClick={handleFirstPage}
        className={`${
          page === 1 ? "hidden" : ""
        } flex items-center hover:bg-slate-300 py-1 px-2 rounded transition duration-300 select-none text-slate-800 text-[20px]`}
      >
        <MdKeyboardDoubleArrowLeft />
      </button>
      <button
        onClick={handlePrev}
        className={`${
          page === 1 ? "hidden" : ""
        } flex items-center hover:bg-slate-300 py-1 px-2 rounded transition duration-300 select-none text-slate-800 font-medium relative`}
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
            <div className="page-link text-slate-800 font-medium">
              {pageIndex}
            </div>
          </div>
        );
      })}

      <button
        onClick={handleNext}
        className={`${
          page === totalPages ? "hidden" : ""
        } flex items-center hover:bg-slate-300 py-1 px-2 rounded transition duration-300 select-none text-slate-800 font-medium relative`}
      >
        Siguiente
        <IoIosArrowForward />
      </button>
      <button
        onClick={handleLastPage} // Agregado para ir a la última página
        className={`${
          page === totalPages ? "hidden" : ""
        } flex items-center hover:bg-slate-300 py-1 px-2 rounded transition duration-300 select-none text-slate-800 text-[20px]`}
      >
        <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  );
}
