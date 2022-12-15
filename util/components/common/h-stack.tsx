import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  alignItems?: CSSProperties["alignItems"];
}

export function HStack({ children, ...rest }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        ...rest,
      }}
    >
      {children}
    </div>
  );
}
