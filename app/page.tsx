import Link from "next/link";
import { Call02Icon, Location03Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { AiBrainIcon } from "~/components/icons/ai-brain";
import { ZeroDayLogo } from "~/components/icons/zero-day";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { GlowEffect } from "~/components/ui/glow-effect";
import { Tilt } from "~/components/ui/tilt";
import { config } from "~/lib/config";

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">Zero-day</h1>
      <div className="relative flex min-h-dvh items-center justify-center">
        <main className="relative flex min-h-dvh w-full min-w-80 max-w-3xl flex-col items-center justify-between gap-2 px-16 pt-5 pb-2 sm:items-start sm:pt-10 md:pt-32">
          <Link href="/" data-slot="logo" className="inline-flex h-8 items-center justify-center">
            <ZeroDayLogo className="h-6 w-auto" />
          </Link>

          <div className="flex flex-col items-center text-center font-mono text-lg text-muted-foreground sm:items-start sm:text-left">
            <p className="max-w-prose">
              We build from <span className="text-foreground">zero</span>.
            </p>

            <p className="max-w-prose">
              We <span className="text-primary">fix</span> the unknown.
            </p>

            <p className="max-w-prose">We start where others stop.</p>
          </div>

          <Tilt className="relative my-6" rotationFactor={8} isRevese>
            <GlowEffect
              colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
              mode="colorShift"
              blur="medium"
            />

            <Card
              render={<article />}
              className="relative w-auto min-w-xs gap-0 overflow-clip pt-6 pb-0"
            >
              <CardHeader render={<header />} className="border-b px-6">
                <CardTitle className="font-mono">Our Product</CardTitle>
              </CardHeader>

              <CardContent className="relative size-80 space-y-2 bg-linear-to-tr p-6 text-base dark:from-zinc-950 dark:to-zinc-800">
                <h2 className="flex flex-col gap-2 uppercase">
                  <span className="text-balance font-bold text-3xl">
                    AI-powered business intelligence
                  </span>
                  <span className="font-semibold text-xl">for 1C ERP users</span>
                </h2>

                <div className="flex items-center gap-2">
                  <p className="w-1/2 text-balance">
                    Ask questions in natural language, get instant answers from your accounting data
                  </p>

                  <AiBrainIcon className="size-32" />
                </div>
              </CardContent>
            </Card>
          </Tilt>

          <address className="grid grid-cols-[auto_1fr] gap-2 font-mono text-muted-foreground text-sm not-italic">
            <HugeiconsIcon
              icon={Mail01Icon}
              aria-hidden="true"
              focusable="false"
              className="icon mt-0.5"
            />
            <span>
              <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
            </span>

            <HugeiconsIcon
              icon={Call02Icon}
              aria-hidden="true"
              focusable="false"
              className="icon mt-0.5"
            />
            <span>
              <a href={`tel:${config.contact.phone}`}>{config.contact.phoneFormatted}</a>
            </span>

            <HugeiconsIcon
              icon={Location03Icon}
              aria-hidden="true"
              focusable="false"
              className="icon mt-0.5"
            />
            <span>
              {config.address.street},
              <br />
              {config.address.postalCode}, {config.address.city}, {config.address.country}
            </span>
          </address>

          <footer className="font-mono">
            <p className="flex flex-col py-4 text-center text-muted-foreground text-sm sm:items-start">
              <span>
                © {new Date().getFullYear()} {config.company.name}
              </span>
              {config.company.idno ? <span>IDNO {config.company.idno}</span> : null}
              <span>All rights reserved.</span>
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
