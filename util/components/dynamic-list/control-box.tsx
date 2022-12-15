"use client";
import { GetButtonBox } from "./get-button-box";
import { Frame } from "../common/frame";
import { ClientComponentStatus } from "../component-status/client-component-status";
import { BlurSlider } from "./blur-slider";
import { HStack } from "../common/h-stack";

export function ControlBox() {
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
