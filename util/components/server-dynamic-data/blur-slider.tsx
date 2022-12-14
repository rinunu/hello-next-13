"use client";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { blurValueState } from "../../blur-value";

export function BlurSlider() {
  const [blurValue, setBlurValue] = useRecoilState(blurValueState);
  return (
    <>
      <Slider value={blurValue} onChange={setBlurValue} min={1} max={10}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  );
}
