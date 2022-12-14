import { isSsr } from "../../is-ssr";
import { View } from "./view";

interface Props {
  isDynamic?: boolean;
}

export function ServerComponentStatus({ isDynamic }: Props) {
  return (
    <View
      isServerComponent
      renderTime={new Date().getTime()}
      isSsr={isSsr()}
      isDynamic={isDynamic}
    />
  );
}
