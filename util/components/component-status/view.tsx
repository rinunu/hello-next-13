"use client";

import { useState } from "react";
import { Clock } from "../clock";

interface Props {
  isServerComponent: boolean;
  isDynamic?: boolean;
  renderTime: number;
  isSsr: boolean;
}

export function View({
  isServerComponent,
  isDynamic,
  isSsr,
  renderTime,
}: Props) {
  useState();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          marginRight: "4px",
          backgroundColor: isServerComponent ? "#9510AC44" : "#2D9BF044",
        }}
      >
        {isServerComponent ? "Server " : "Client"}
      </div>

      {/*<div*/}
      {/*  style={{*/}
      {/*    marginRight: "4px",*/}
      {/*    backgroundColor: isDynamic ? "#faa" : "#afa",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  {isDynamic ? "Dynamic " : "Static "}*/}
      {/*</div>*/}

      {/*<div*/}
      {/*  style={{*/}
      {/*    marginRight: "4px",*/}
      {/*    backgroundColor: isSsr ? "#afa" : "#faa",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  {isSsr ? "Server Rendering" : "Client Rendering"}*/}
      {/*</div>*/}

      <div
        style={{
          marginRight: "4px",
          backgroundColor: "#eee",
        }}
      >
        <Clock instant={renderTime} />
      </div>
    </div>
  );
}
