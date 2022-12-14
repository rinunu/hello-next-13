import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Frame({ children }: Props) {
  return (
    <div
      style={{
        border: "1px solid #888",
        padding: "8px",
        margin: "8px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      {children}
    </div>
  );
}
