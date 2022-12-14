import { Frame } from "./frame";
import { ServerComponentStatus } from "./component-status/server-component-status";

interface DynamicSample {
  data: {
    avatar: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
  };
}

const fetcher = (url: string): Promise<any> =>
  fetch(url).then((res) => res.json());

/**
 */
export async function DynamicData2() {
  const data: DynamicSample = await (
    await fetch("https://reqres.in/api/users/2")
  ).json();

  return (
    <Frame>
      <ServerComponentStatus isDynamic />

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
