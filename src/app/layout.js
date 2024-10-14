import "./globals.css";
import Header from "./ui/header/Header";

export const metadata = {
  title: "PokeApi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#202124] flex flex-col items-center">
        <Header />
        {children}
      </body>
    </html>
  );
}
