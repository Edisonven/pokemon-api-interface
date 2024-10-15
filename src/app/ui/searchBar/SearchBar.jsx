import Image from "next/image";

export default function SearchBar() {
  return (
    <section className="my-3 ml-auto w-max mr-[100px]">
      <div className="relative">
        <input
          type="text"
          placeholder="Busca tu pokemon..."
          className="outline-none py-1 px-3 rounded-3xl shadow pr-8 w-[400px] h-[40px]"
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
    </section>
  );
}
