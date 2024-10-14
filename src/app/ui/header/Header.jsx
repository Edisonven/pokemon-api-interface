import Image from "next/image";

export default function Header() {
  return (
    <div className="my-5">
      <Image
        className="w-full max-w-[300px]"
        width={600}
        height={300}
        src="/project/pokemon-header.svg"
        alt="pokemon logo"
        priority
      />
    </div>
  );
}
