"use client";
import useSWR from "swr";
import invariant from "invariant";
import { Frame } from "./common/frame";
import { Loading } from "./common/loading";
import { ClientComponentStatus } from "./component-status/client-component-status";
import Image from "next/image";
import { HStack } from "./common/h-stack";

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
  const res = await fetch(url);
  return await res.json();
}

/**
 * dynamic data
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
      <HStack alignItems="center">
        <div>{data.data.email}</div>
        <Image src={data.data.avatar} alt="avatar" width={40} height={40} />
      </HStack>
    </Frame>
  );
}
