"use client"
import { UserProvider } from "@/Context/UserContext";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Providers;
