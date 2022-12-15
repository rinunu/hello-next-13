"use client";

import { useState } from "react";
import { Clock } from "../clock";
import { Wrap } from "../common/wrap";

interface Props {
  isServerComponent: boolean;
  isDynamic?: boolean;
  renderTime: number;
  isSsr: boolean;
}

export function View({ isServerComponent, renderTime }: Props) {
  useState();
  return (
    <Wrap>
      <div
        style={{
          marginRight: "4px",
          backgroundColor: isServerComponent ? "#9510AC44" : "#2D9BF044",
        }}
      >
        {isServerComponent ? "Server " : "Client"}
      </div>

      <div
        style={{
          marginRight: "4px",
          backgroundColor: "#eee",
          minWidth: "80px",
          paddingLeft: "4px",
          paddingRight: "4px",
          textAlign: "right",
        }}
      >
        <Clock instant={renderTime} />
      </div>
    </Wrap>
  );
}
