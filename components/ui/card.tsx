"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "~/lib/utils";

export type CardState = StateWithSlot<"card", { size: "default" | "sm" }>;
export type CardProps = WithOwnProps<
  useRender.ComponentProps<"div", CardState>,
  { size?: "default" | "sm" }
>;

function Card(props: CardProps) {
  const { className, render, size = "default", ...rest } = props;
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-card-foreground text-sm ring-1 ring-foreground/10 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
          className,
        ),
      },
      rest,
    ),
    render,
    state: { slot: "card", size },
  });
}

export type CardHeaderState = StateWithSlot<"card-header">;
export type CardHeaderProps = useRender.ComponentProps<"div", CardHeaderState>;

function CardHeader(props: CardHeaderProps) {
  const { className, render, ...rest } = props;
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
          className,
        ),
      },
      rest,
    ),
    render,
    state: { slot: "card-header" },
  });
}

export type CardTitleState = StateWithSlot<"card-title">;
export type CardTitleProps = useRender.ComponentProps<"div", CardTitleState>;

function CardTitle(props: CardTitleProps) {
  const { className, render, ...rest } = props;
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "font-medium text-base leading-snug group-data-[size=sm]/card:text-sm",
          className,
        ),
      },
      rest,
    ),
    render,
    state: { slot: "card-title" },
  });
}

export type CardDescriptionState = StateWithSlot<"card-description">;
export type CardDescriptionProps = useRender.ComponentProps<"div", CardDescriptionState>;

function CardDescription(props: CardDescriptionProps) {
  const { className, render, ...rest } = props;
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">({ className: cn("text-muted-foreground text-sm", className) }, rest),
    render,
    state: { slot: "card-description" },
  });
}

export type CardActionState = StateWithSlot<"card-action">;
export type CardActionProps = useRender.ComponentProps<"div", CardActionState>;

function CardAction(props: CardActionProps) {
  const { className, render, ...rest } = props;
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
      },
      rest,
    ),
    render,
    state: { slot: "card-action" },
  });
}

export type CardContentState = StateWithSlot<"card-content">;
export type CardContentProps = useRender.ComponentProps<"div", CardContentState>;

function CardContent(props: CardContentProps) {
  const { className, render, ...rest } = props;
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      { className: cn("px-4 group-data-[size=sm]/card:px-3", className) },
      rest,
    ),
    render,
    state: { slot: "card-content" },
  });
}

export type CardFooterState = StateWithSlot<"card-footer">;
export type CardFooterProps = useRender.ComponentProps<"div", CardFooterState>;

function CardFooter(props: CardFooterProps) {
  const { className, render, ...rest } = props;
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
          className,
        ),
      },
      rest,
    ),
    render,
    state: { slot: "card-footer" },
  });
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
