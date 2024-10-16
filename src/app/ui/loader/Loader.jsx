import Image from "next/image";
import "./loader.css";

export default function Loader() {
  return (
    <div className="flex items-center justify-center fixed inset-0">
      <Image
        src="/pokemon-types/pokebola.png"
        width={120}
        height={120}
        alt="loader img"
        className="loader z-20 relative"
      />
    </div>
  );
}
