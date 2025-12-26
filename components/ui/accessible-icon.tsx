"use client";

import * as React from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

export type AccessibleIconProps = WithOwnProps<
  Without<React.ComponentPropsWithRef<"svg">, "children">,
  {
    /**
     * Allows you to replace the component’s HTML element
     * with a different tag, or compose it with another component.
     *
     * Accepts a `ReactElement` or a function that returns the element to render.
     */
    render:
      | ((
          props: React.ComponentPropsWithRef<"svg">,
          state: StateWithSlot<"accessible-icon" | "icon">,
        ) => React.ReactElement<unknown>)
      | React.ReactElement<unknown>;
    /**
     * The accessible label for the icon. This label will be visually hidden but announced to screen
     * reader users, similar to `alt` text for `img` tags.
     */
    label?: string;
    /**
     * Children are not supported for AccessibleIcon to ensure proper accessibility structure.
     * @deprecated Use the `render` prop instead.
     */
    children?: never;
  }
>;

function AccessibleIcon(props: AccessibleIconProps) {
  const { label, render, children: _, ...rest } = props;

  const element = useRender({
    defaultTagName: "svg",
    props: mergeProps<"svg">({ "aria-hidden": true, focusable: false }, rest),
    render,
    state: { slot: label ? "accessible-icon" : "icon" },
  });

  if (!label) return element;

  return (
    <React.Fragment>
      {element}
      <span className="sr-only">{label}</span>
    </React.Fragment>
  );
}

export { AccessibleIcon };
