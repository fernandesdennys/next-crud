import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Titulo(props: { children: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) {
  return (
    <div
      className={`
    flex flex-col
    justify-center
    `}
    >
      <h1 className="pl-5 py-2 text-2xl">{props.children}</h1>
      <hr className="border-2 border-purple-500"/>
    </div>
  );
}
