import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Wrap({ children }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
}
