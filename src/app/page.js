import Pokemons from "./ui/Pokemon/Pokemons";
import Image from "next/image";

export default function Home() {
  return (
    <section className="home">
      <Image
        alt="image"
        width={1000}
        height={1000}
        src="/project/background.webp"
        className="fixed top-0 right-0 left-0 bottom-0 w-full -z-10 h-full object-cover"
      />
      <Pokemons />
    </section>
  );
}
