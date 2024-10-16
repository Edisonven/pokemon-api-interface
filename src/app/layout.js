import "./globals.css";
import Header from "./ui/header/Header";
import PokemonProvider from "@/context/PokemonContext";

export const metadata = {
  title: "PokeApi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app bg-[#e7e7e7] flex flex-col items-center">
        <PokemonProvider>
          <Header />
          {children}
        </PokemonProvider>
      </body>
    </html>
  );
}
