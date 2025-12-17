/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference path="dom.d.ts" />

import type * as React from "react";

declare module "react" {
  export function useId(): `_${string}_`;

  export interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }

  type ComponentPropsWithRenderer<
    T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
    State = Record<string, unknown>,
  > = WithOwnProps<
    React.ComponentProps<T>,
    { render?: import("@base-ui/react/use-render").useRender.RenderProp<State> }
  >;
}
