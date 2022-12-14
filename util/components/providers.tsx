"use client";

import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <ChakraProvider>
      <RecoilRoot> {children}</RecoilRoot>
    </ChakraProvider>
  );
}
