import { authRoutes, protectedRoutes } from "./Constants";
import { getCurrentUser } from "./Services/AuthServices/index";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;
  const userInfo = await getCurrentUser();
  console.log("pathname", pathname);
  console.log("userinfo", userInfo);
  if (!userInfo && !authRoutes.includes(pathname)) {
    return NextResponse.redirect(
      new URL(`/login?redirectPath=${pathname}`, req.url)
    );
  } else if (!userInfo && authRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  // return NextResponse.next("/");
};
export const config = {
  matcher: ["/login", "/register", "/admin/:path*", "/user/:path*"],
};
