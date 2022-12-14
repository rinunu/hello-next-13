"use client";

import { useEffect, useState } from "react";

interface Props {
  instant?: number;
}

export function Clock({ instant = 0 }: Props) {
  const [now, setNow] = useState("...");

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Math.floor((new Date().getTime() - instant) / 1000) + "秒前");
    }, 500);
    return () => clearInterval(interval);
  }, [instant]);

  return <>{now}</>;
}
