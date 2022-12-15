"use client";
import { Frame } from "../common/frame";
import Link from "next/link";
import { ClientComponentStatus } from "../component-status/client-component-status";
import { HStack } from "../common/h-stack";
import { Item } from "./item";
import { DynamicData } from "../dynamic-data";

/**
 * onClick は Client Component
 */
export function Menu() {
  return (
    <HStack>
      <Frame>
        <ClientComponentStatus />
        <HStack>
          <Link href="/static">
            <Item>Static Rendering サンプル</Item>
          </Link>
          <Link href="/dynamic">
            <Item>Dynamic Rendering サンプル</Item>
          </Link>
        </HStack>
      </Frame>
      <DynamicData />
    </HStack>
  );
}
