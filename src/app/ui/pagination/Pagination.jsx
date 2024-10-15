import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Pagination({
  limit,
  setOffSet,
  totalCount,
  page,
  setPage,
}) {
  const totalPages = Math.ceil(totalCount / limit);
  const visiblePages = 10;

  const startPage = Math.max(1, page - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const handleNext = () => {
    if (page < totalPages) {
      const newPage = page + 1;
      setPage(newPage);
      setOffSet((newPage - 1) * limit);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
      setOffSet((newPage - 1) * limit);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handlePrev}
        className={`page-item ${
          page === 1 ? "hidden" : ""
        } flex items-center hover:bg-slate-200 py-1 px-2 rounded transition duration-300 select-none text-slate-800 dark:text-white font-medium relative overflow-hidden dark:hover:bg-slate-700`}
      >
        <IoIosArrowBack />
        Anterior
      </button>

      {[...Array(endPage - startPage + 1)].map((_, index) => {
        const pageIndex = startPage + index;
        return (
          <div
            key={pageIndex}
            className={`page-item ${
              page === pageIndex ? "bg-orange-500 rounded-full" : ""
            } cursor-pointer w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-400 transition duration-300 select-none hover:dark:text-slate-800`}
            onClick={() => {
              setPage(pageIndex);
              setOffSet((pageIndex - 1) * limit);
            }}
          >
            <div className="page-link text-slate-800 font-medium dark:text-white">
              {pageIndex}
            </div>
          </div>
        );
      })}

      <button
        onClick={handleNext}
        className={`page-item ${
          page === totalPages ? "disabled" : ""
        } flex items-center hover:bg-slate-200 py-1 px-2 rounded transition duration-300 select-none text-slate-800 dark:text-white font-medium relative overflow-hidden dark:hover:bg-slate-700`}
      >
        Siguiente
        <IoIosArrowForward />
      </button>
    </div>
  );
}
