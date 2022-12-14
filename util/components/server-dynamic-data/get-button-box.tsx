"use client";
import { useRouter } from "next/navigation";

import { useCallback, useTransition } from "react";
import { Button } from "../button";
import { Frame } from "../frame";
import { ClientComponentStatus } from "../component-status/client-component-status";

export function GetButtonBox() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const refresh = useCallback(() => {
    startTransition(() => {
      router.refresh();
    });
  }, [router]);

  return (
    <Frame>
      <ClientComponentStatus />
      <div
        style={{
          marginTop: "12px",
        }}
      >
        <Button isLoading={isPending} onClick={refresh}>
          ゲットだよ！
        </Button>
      </div>
    </Frame>
  );
}
