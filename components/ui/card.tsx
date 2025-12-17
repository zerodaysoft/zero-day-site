"use client";

import * as React from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "~/lib/utils";

export type CardState = {
  size: "default" | "sm";
  slot: "card" | (string & {});
};

export type CardProps = WithOwnProps<
  useRender.ComponentProps<"div", CardState>,
  {
    size?: "default" | "sm";
  }
>;

function Card(props: CardProps) {
  const { className, size = "default", render, ...otherProps } = props;
  const state = React.useMemo<CardState>(() => ({ size, slot: "card" }), [size]);
  const defaultProps: useRender.ElementProps<"div"> = {
    className: cn(
      "group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-card-foreground text-sm ring-1 ring-foreground/10 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
      className,
    ),
  };

  return useRender({
    defaultTagName: "div",
    render,
    state,
    props: mergeProps<"div">(defaultProps, otherProps),
  });
}

export type CardHeaderState = {
  slot: "card-header" | (string & {});
};

export type CardHeaderProps = useRender.ComponentProps<"div", CardHeaderState>;

function CardHeader(props: CardHeaderProps) {
  const { className, render, ...otherProps } = props;
  return useRender({
    defaultTagName: "div",
    render,
    state: { slot: "card-header" },
    props: mergeProps<"div">(
      {
        className: cn(
          "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
          className,
        ),
      },
      otherProps,
    ),
  });
}

export type CartTitleState = {
  slot: "card-title" | (string & {});
};

export type CardTitleProps = useRender.ComponentProps<"div", CartTitleState>;

function CardTitle(props: CardTitleProps) {
  const { className, render, ...otherProps } = props;
  return useRender({
    defaultTagName: "div",
    render,
    state: { slot: "card-title" },
    props: mergeProps<"div">(
      {
        className: cn(
          "font-medium text-base leading-snug group-data-[size=sm]/card:text-sm",
          className,
        ),
      },
      otherProps,
    ),
  });
}

export type CardDescriptionState = {
  slot: "card-description" | (string & {});
};

export type CardDescriptionProps = useRender.ComponentProps<"div", CardDescriptionState>;

function CardDescription(props: CardDescriptionProps) {
  const { className, render, ...otherProps } = props;
  return useRender({
    defaultTagName: "div",
    render,
    state: { slot: "card-description" },
    props: mergeProps<"div">(
      { className: cn("text-muted-foreground text-sm", className) },
      otherProps,
    ),
  });
}

export type CardActionState = {
  slot: "card-action" | (string & {});
};

export type CardActionProps = useRender.ComponentProps<"div", CardActionState>;

function CardAction(props: CardActionProps) {
  const { className, render, ...otherProps } = props;
  return useRender({
    defaultTagName: "div",
    render,
    state: { slot: "card-action" },
    props: mergeProps<"div">(
      {
        className: cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
      },
      otherProps,
    ),
  });
}

export type CardContentState = {
  slot: "card-content" | (string & {});
};

export type CardContentProps = useRender.ComponentProps<"div", CardContentState>;

function CardContent(props: CardContentProps) {
  const { className, render, ...otherProps } = props;
  return useRender({
    defaultTagName: "div",
    render,
    state: { slot: "card-content" },
    props: mergeProps<"div">(
      { className: cn("px-4 group-data-[size=sm]/card:px-3", className) },
      otherProps,
    ),
  });
}

export type CardFooterState = {
  slot: "card-footer" | (string & {});
};

export type CardFooterProps = useRender.ComponentProps<"div", CardFooterState>;

function CardFooter(props: CardFooterProps) {
  const { className, render, ...otherProps } = props;
  return useRender({
    defaultTagName: "div",
    render,
    state: { slot: "card-footer" },
    props: mergeProps<"div">(
      {
        className: cn(
          "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
          className,
        ),
      },
      otherProps,
    ),
  });
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
