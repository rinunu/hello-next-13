import { ReactNode } from "react";
import { Providers } from "../util/components/providers";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="ja">
      <head>
        <title>Hello Next.js 13</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
