"use client";
import { Spinner } from "@chakra-ui/react";

export function Loading() {
  return (
    <div
      style={{
        margin: "8px",
      }}
    >
      <Spinner size="lg" />
    </div>
  );
}
