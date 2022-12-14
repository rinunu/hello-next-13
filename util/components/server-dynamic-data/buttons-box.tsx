"use client";
import { GetButtonBox } from "./get-button-box";
import { Frame } from "../frame";
import { ClientComponentStatus } from "../component-status/client-component-status";
import { BlurSlider } from "./blur-slider";
import { HStack } from "@chakra-ui/react";

export function ButtonsBox() {
  return (
    <HStack>
      <GetButtonBox />

      <Frame>
        <ClientComponentStatus />
        ぼかし調整
        <BlurSlider />
      </Frame>
    </HStack>
  );
}
