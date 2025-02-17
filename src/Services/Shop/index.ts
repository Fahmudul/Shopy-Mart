"use server";

import { cookies } from "next/headers";

export const createShop = async (data: FormData) => {
  console.log("AccessToken ", (await cookies()).get("accessToken")!.value);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shop`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
    console.log("from shop", await res.json());
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
