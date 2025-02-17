"use client";
import { Button } from "../ui/button";
import { Heart, LogOut, ShoppingBag } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import Link from "next/link";
import { useUser } from "@/Context/UserContext";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { LogOutUser } from "@/Services/AuthServices";
import { protectedRoutes } from "@/Constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
export default function Navbar() {
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  console.log("from line 15", pathname);
  const router = useRouter();
  const handleLogOut = async () => {
    await LogOutUser();
    if (protectedRoutes.some((route) => route === pathname)) {
      router.push("/login");
    }
  };
  return (
    <header className="border-b w-full">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <Link href="/">
          <h1 className="text-2xl font-black flex items-center">
            <Image src={logo} width={40} height={40} alt="logo" /> Shopy Mart
          </h1>
        </Link>
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

          {user ? (
            <>
              <Link href="/create-shop">
                <Button className="rounded-full">Create Shop</Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>User</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  <DropdownMenuItem>My Shop</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="bg-red-500 cursor-pointer"
                    onClick={handleLogOut}
                  >
                    <LogOut />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link href="/login">
              <Button className="rounded-full" variant="outline">
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
