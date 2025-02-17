/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

const api = process.env.NEXT_PUBLIC_API_URL;
export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${api}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    // console.log("from line 16", result);
    if (result.success) {
      const saveTokenInCookie = await cookies();
      saveTokenInCookie.set("accessToken", result.data.accessToken);
      return result;
    } else {
      return null;
    }
  } catch (error: any) {
    return Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${api}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    console.log("result", result);
    if (result.success) {
      const saveTokenInCookie = await cookies();
      saveTokenInCookie.set("accessToken", result.data.accessToken);
      return result;
    } else {
      return null;
    }
  } catch (error: any) {
    return Error(error);
  }
};

export const LogOutUser = async () => {
  const savedToken = await cookies();
  savedToken.delete("accessToken");
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decodedData = null;
  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    return decodedData;
  } else {
    return null;
  }
};

export const verifyRecaptcha = async (value: string) => {
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SERVER_KEY!,
        response: value,
      }),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    throw Error(error);
  }
};
