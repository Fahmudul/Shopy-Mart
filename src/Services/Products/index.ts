"use server";
import { cookies } from "next/headers";

export const createProduct = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
    const result = await res.json();
    console.log("from product result", result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const udpateProduct = async (data: FormData, id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/product/${id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: data,
      }
    );
    const result = await res.json();
    console.log("from product result", result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllProducts = async (page: string, limit: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/product?page=${page}&limit=${limit}`
    );
    // console.log(await res.json());
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const getSingleProduct = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`);
    // console.log(await res.json());
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
