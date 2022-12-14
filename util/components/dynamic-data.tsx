"use client";
import useSWR from "swr";
import invariant from "invariant";
import { Frame } from "./frame";
import { sleep } from "../sleep";
import { Loading } from "./loading";
import { ClientComponentStatus } from "./component-status/client-component-status";

interface DynamicSample {
  data: {
    avatar: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
  };
}

async function fetcher(url: string): Promise<any> {
  await sleep(1000);
  const res = await fetch(url);
  return await res.json();
}

/**
 */
export function DynamicData() {
  const { data } = useSWR<DynamicSample>(
    "https://reqres.in/api/users/2",
    fetcher
  );

  if (!data) {
    return <Loading />;
  }

  invariant(data, "data is required");

  return (
    <Frame>
      <ClientComponentStatus />

      <div>プロフィール</div>

      <div>{data.data.email}</div>
      <img
        src={data.data.avatar}
        alt="avatar"
        style={{
          width: "50px",
          height: "50px",
        }}
      />
    </Frame>
  );
}
