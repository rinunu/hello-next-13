import { ReactNode } from "react";
import { Spinner } from "@chakra-ui/react";

interface Props {
  onClick: () => void;
  children: ReactNode;
  isLoading?: boolean;
}

export function Button({ onClick, isLoading, children }: Props) {
  return (
    <button
      style={{
        border: "1px solid #888",
        borderRadius: "4px",
        padding: "4px",
        paddingLeft: "12px",
        paddingRight: "12px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        minWidth: "140px",
        backgroundColor: "#fcc",
        fontWeight: "bold",
        fontSize: "18px",
      }}
      onClick={onClick}
    >
      {isLoading ? <Spinner size="sm" /> : children}
    </button>
  );
}
