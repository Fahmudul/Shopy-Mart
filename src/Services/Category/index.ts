"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createCategory = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
    revalidateTag("Category");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`, {
      next: {
        tags: ["Category"],
      },
    });
    // console.log(await res.json());
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteCategory = async (id: string) => {
  // console.log("id", id);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/category/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("Category");

    const result = await res.json();
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};
