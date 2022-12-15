import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Item({ children }: Props) {
  return (
    <div
      style={{
        textDecoration: "underline",
        padding: "4px",
        backgroundColor: "#fafafa",
        margin: "4px",
      }}
    >
      {children}
    </div>
  );
}
