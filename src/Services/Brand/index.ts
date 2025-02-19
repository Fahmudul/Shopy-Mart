"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createBrand = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brand`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
    revalidateTag("Brand");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllBrands = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brand`, {
      next: {
        tags: ["Brand"],
      },
    });
    // console.log(await res.json());
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteBrand = async (id: string) => {
  // console.log("id", id);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brand/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    revalidateTag("Brand");

    const result = await res.json();
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};
