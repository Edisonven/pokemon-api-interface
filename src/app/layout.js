import "./globals.css";
import Header from "./ui/header/Header";
import Pokemons from "./ui/Pokemon/Pokemons";

export const metadata = {
  title: "PokeApi",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="bg-[#202124] flex flex-col items-center">
        <Header />
        <Pokemons />
      </body>
    </html>
  );
}
