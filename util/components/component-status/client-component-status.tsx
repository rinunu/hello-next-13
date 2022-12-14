"use client";
import { isSsr } from "../../is-ssr";
import { View } from "./view";
import { useState } from "react";

interface Props {
  isDynamic?: boolean;
}

export function ClientComponentStatus({ isDynamic }: Props) {
  const [time] = useState(new Date().getTime());
  return (
    <View
      isServerComponent={false}
      renderTime={time}
      isSsr={isSsr()}
      isDynamic={isDynamic}
    />
  );
}
