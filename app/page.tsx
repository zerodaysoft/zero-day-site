import Image from "next/image";
import Link from "next/link";
import { MailIcon, MapPinnedIcon } from "lucide-react";

import productCover from "~/assets/product-cover.png";
import { ZeroDayLogo } from "~/components/icons/zero-day";
import { ModeSwitcher } from "~/components/mode-switcher";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { GlowEffect } from "~/components/ui/glow-effect";
import { config } from "~/lib/config";

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">Zero-day</h1>
      <div className="relative flex min-h-dvh items-center justify-center">
        <main className="relative flex min-h-dvh w-full max-w-3xl flex-col items-center justify-between gap-2 px-16 py-32 sm:items-start">
          <Link href="/" data-slot="logo" className="inline-flex h-8 items-center justify-center">
            <ZeroDayLogo className="h-6 w-auto" />
          </Link>

          <div className="flex flex-col items-center text-center font-mono text-lg text-muted-foreground sm:items-start sm:text-left">
            <p className="max-w-prose">
              We build from <span className="text-foreground">zero</span>.
            </p>
            <p className="max-w-prose">
              We <span className="text-lime-500 dark:text-lime-600">fix</span> the unknown.
            </p>
            <p className="max-w-prose">We start where others stop.</p>
          </div>

          <div className="relative">
            <GlowEffect
              colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
              mode="colorShift"
              blur="medium"
            />
            <Card className="relative w-auto min-w-xs gap-0 overflow-clip pb-0" asChild>
              <article>
                <CardHeader className="border-b [.border-b]:pb-3">
                  <CardTitle className="font-mono">Our Product</CardTitle>
                </CardHeader>
                <CardContent className="relative aspect-square size-full p-0">
                  <Image
                    alt="AI-powered business intelligence for 1C ERP users. Ask questions in natural language, get instant answers from your accounting data."
                    className="aspect-square"
                    src={productCover}
                    placeholder="blur"
                    priority
                    fill
                  />
                  <span className="sr-only">
                    AI-powered business intelligence for 1C ERP users. Ask questions in natural
                    language, get instant answers from your accounting data.
                  </span>
                </CardContent>
              </article>
            </Card>
          </div>

          <address className="grid grid-cols-[auto_1fr] gap-2 font-mono text-muted-foreground text-sm not-italic">
            <MailIcon aria-hidden="true" focusable="false" className="mt-0.5" />
            <span>
              <a href={`mailto:${config.contact.email}`}>
                {config.contact.email.split("@")[0]}
                <span className="text-lime-500 dark:text-lime-600">@</span>
                {config.contact.email.split("@")[1]}
              </a>
            </span>

            <MapPinnedIcon aria-hidden="true" focusable="false" className="mt-0.5" />
            <span>
              {config.address.street},
              <br />
              {config.address.city}, {config.address.postalCode} {config.address.country}
            </span>
          </address>

          <footer className="font-mono">
            <p className="flex flex-col py-4 text-center text-muted-foreground text-sm sm:items-start">
              <span>
                © {new Date().getFullYear()} {config.company.name} All rights reserved.
              </span>
              {config.company.idno ? <span>IDNO {config.company.idno}</span> : null}
            </p>
          </footer>
        </main>

        <ModeSwitcher className="absolute top-5 right-5" />
      </div>
    </>
  );
}
