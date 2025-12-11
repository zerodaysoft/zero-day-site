/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference path="dom.d.ts" />

import type * as React from "react";

declare module "react" {
  export function useId(): `_${string}_`;

  export interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }

  type ComponentPropsWithSlot<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
    WithOwnProps<React.ComponentProps<T>, { asChild?: boolean | undefined }>;
}
