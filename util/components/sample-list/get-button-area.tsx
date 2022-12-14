"use client";
import { Button } from "../button";
import { Frame } from "../frame";
import { ClientComponentStatus } from "../component-status/client-component-status";

interface Props {
  id: string;
}

export function GetButtonArea({ id }: Props) {
  return (
    <Frame>
      <ClientComponentStatus />
      <Button onClick={() => {}}>ゲットだよ！</Button>
    </Frame>
  );
}
