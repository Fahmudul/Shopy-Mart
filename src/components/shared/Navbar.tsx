import { Button } from "../ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
export default function Navbar() {
  return (
    <header className="border-b w-full bg-white">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <h1 className="text-2xl font-black flex items-center">
          <Image className="w-9 h-6 invert-20" src={logo} alt="logo" />
          Shopy Mart
        </h1>
        <div className="max-w-md  flex-grow">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
          />
        </div>
        <nav className="flex gap-2">
          <Button variant="outline" className="rounded-full p-0 size-10">
            <Heart />
          </Button>
          <Button variant="outline" className="rounded-full p-0 size-10">
            <ShoppingBag />
          </Button>
        </nav>
      </div>
    </header>
  );
}
