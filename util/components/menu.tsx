"use client";
import { Frame } from "./frame";
import { Box, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { ClientComponentStatus } from "./component-status/client-component-status";

/**
 * onClick は Client Component
 */
export function Menu() {
  return (
    <Frame>
      <ClientComponentStatus />
      <HStack>
        <Link href="/static">
          <Box textDecoration="underline">Static Rendering サンプル</Box>
        </Link>
        <Link href="/dynamic">
          <Box textDecoration="underline">Dynamic Rendering サンプル</Box>
        </Link>
      </HStack>
    </Frame>
  );
}
