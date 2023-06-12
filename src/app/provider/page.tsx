"use client";
import { ChakuraProviders } from "./chakura/page";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ChakuraProviders>{children}</ChakuraProviders>;
};
export default Providers;
