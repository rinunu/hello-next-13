"use client";

import { Clock } from "./clock";
import { useState } from "react";

export function ClientComponentMark() {
  useState("");
  return (
    <div
      style={{
        fontSize: "14px",
        backgroundColor: "#eaa",
        marginBottom: "8px",
      }}
    >
      Client Component <Clock />
    </div>
  );
}
