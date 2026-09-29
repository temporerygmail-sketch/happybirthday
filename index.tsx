import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ScrollVideoBackground } from "@/components/ScrollVideoBackground";
import { Reveal } from "@/components/Reveal";
import { Envelope } from "@/components/Envelope";
import { Cake } from "@/components/Cake";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, Ismail" },
      {
        name: "description",
        content: "A quiet, cinematic birthday note for Ismail — from Ayzal Mahnoor.",
      },
      { property: "og:title", content: "Happy Birthday, Ismail" },
      {
        property: "og:description",
        content: "A quiet, cinematic birthday note for Ismail — from Ayzal Mahnoor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`flex min-h-[100svh] w-full flex-col items-center justify-center px-5 py-24 sm:px-8 ${className}`}
    >
      <div className="w-full max-w-2xl">{children}</div>
    </section>
  );
}

function Line({
  children,
  delay = 0,
  size = "md",
}: {
  children: React.ReactNode;
  delay?: number;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizes = {
    sm: "text-lg sm:text-xl text-muted-foreground",
    md: "text-2xl sm:text-3xl",
    lg: "text-3xl sm:text-5xl",
    xl: "text-4xl sm:text-6xl",
  } as const;
  return (
    <Reveal delay={delay} className={`text-display ${sizes[size]} text-balance`}>
      {children}
    </Reveal>
  );
}

const wishes = [
  { title: "A good year.", body: "Not perfect. Just a little better than the last one." },
  { title: "Good days.", body: "The kind you actually remember." },
  { title: "Something to be proud of.", body: "Hopefully you get there." },
  { title: "And a little less stress.", body: "You probably deserve that." },
];

function Index() {
  const [oneMore, setOneMore] = useState(false);

  return (
    <main className="relative w-full overflow-x-hidden">
      <ScrollVideoBackground />

      {/* Opening */}
      <Section id="s1" className="text-center">
        <Line size="xl">Hey, Ismail.</Line>
        <div className="h-5" />
        <Line delay={700} size="md">
          I made something for you.
        </Line>
        <Reveal delay={1400} className="mt-12 flex justify-center">
          <button className="btn-cine" onClick={() => scrollToId("s2")}>
            Come on →
          </button>
        </Reveal>
      </Section>

      {/* Next */}
      <Section id="s2" className="text-center">
        <Line size="lg">So... it&apos;s your birthday.</Line>
        <div className="h-6" />
        <Line delay={300} size="md">
          And I didn&apos;t really know what to make.
        </Line>
        <div className="h-6" />
        <Line delay={600} size="sm">
          A normal birthday message felt a little too boring, so I ended up making this.
        </Line>
        <Reveal delay={900} className="mt-12 flex justify-center">
          <button className="btn-cine" onClick={() => scrollToId("s3")}>
            Keep going →
          </button>
        </Reveal>
      </Section>

      {/* Honest */}
      <Section id="s3">
        <div className="glass-panel rounded-2xl px-7 py-12 text-center sm:px-12 sm:py-16">
          <Line size="lg">I&apos;ll be honest...</Line>
          <div className="h-6" />
          <Line delay={300} size="md">
            We don&apos;t really talk that much.
          </Line>
          <div className="h-6" />
          <Line delay={600} size="md">
            But I still wanted to wish you properly this time.
          </Line>
          <div className="h-6" />
          <Line delay={900} size="sm">
            So here we are.
          </Line>
        </div>
      </Section>

      {/* Wishes */}
      <Section>
        <Line size="lg">Anyway... enough of that.</Line>
        <div className="mt-12 grid gap-5">
          {wishes.map((w, i) => (
            <Reveal
              key={w.title}
              delay={i * 150}
              className="glass-panel rounded-2xl px-6 py-7 sm:px-9 sm:py-9"
            >
              <p className="text-display text-2xl sm:text-3xl">{w.title}</p>
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">{w.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Playful */}
      <Section id="s5" className="text-center">
        <Line size="lg">Wait...</Line>
        <div className="h-6" />
        <Line delay={900} size="md">
          I had something serious to say.
        </Line>
        <div className="h-6" />
        <Line delay={1600} size="md">
          Then I changed my mind.
        </Line>
        <Reveal delay={2100} className="mt-12 flex justify-center">
          <button className="btn-cine" onClick={() => scrollToId("s6")}>
            Let&apos;s continue →
          </button>
        </Reveal>
      </Section>

      {/* Serious */}
      <Section id="s6">
        <Line size="lg">Okay, jokes aside...</Line>
        <div className="mt-10 space-y-8">
          <Line delay={200} size="md">
            I hope this year gives you more reasons to smile than to overthink.
          </Line>
          <Line delay={300} size="md">
            I hope the things you&apos;re working on actually work out.
          </Line>
          <Line delay={400} size="md">
            And when things don&apos;t go according to plan...
          </Line>
          <Line delay={500} size="md">
            I hope you don&apos;t give up too quickly.
          </Line>
          <Line delay={600} size="sm">
            That&apos;s it.
          </Line>
          <Line delay={700} size="md">
            I just genuinely wish good things for you.
          </Line>
        </div>
      </Section>

      {/* Envelope */}
      <Section id="s7" className="text-center">
        <Line size="lg">There&apos;s one more thing.</Line>
        <Reveal delay={300} className="mt-12 flex justify-center">
          <Envelope />
        </Reveal>
      </Section>

      {/* Small surprise */}
      <Section id="s8" className="text-center">
        <Line size="md">Okay... letter over.</Line>
        <div className="h-6" />
        <Line delay={700} size="md">
          Actually...
        </Line>
        <div className="h-6" />
        <Line delay={1300} size="lg">
          One more thing.
        </Line>

        {!oneMore ? (
          <Reveal delay={1800} className="mt-12 flex justify-center">
            <button className="btn-cine" onClick={() => setOneMore(true)}>
              One more click →
            </button>
          </Reveal>
        ) : (
          <div className="mt-12">
            <Line size="md">You made it this far.</Line>
            <div className="h-6" />
            <Line delay={500} size="md">
              So you officially deserve the actual birthday part.
            </Line>
            <Reveal delay={1000} className="mt-10 flex justify-center">
              <button className="btn-cine" onClick={() => scrollToId("s9")}>
                Let&apos;s go →
              </button>
            </Reveal>
          </div>
        )}
      </Section>

      {/* Cake */}
      <Section id="s9" className="text-center">
        <Line size="lg">Make a wish.</Line>
        <Reveal delay={300} className="mt-16 flex justify-center">
          <Cake />
        </Reveal>
      </Section>

      {/* Final message */}
      <Section className="text-center">
        <Line size="xl">Happy Birthday, Ismail. 🤍</Line>
        <div className="mt-10 space-y-8">
          <Line delay={200} size="md">
            I hope this year is kind to you.
          </Line>
          <Line delay={300} size="sm">
            More good moments.
            <br />
            More reasons to smile.
            <br />
            More things to look forward to.
          </Line>
          <Line delay={400} size="sm">
            Take care.
            <br />
            Keep going.
            <br />
            And keep being you.
          </Line>
          <Line delay={500} size="md">
            — Ayzal Mahnoor
          </Line>
        </div>
      </Section>

      {/* Very end */}
      <Section className="text-center">
        <Line size="lg">Happy Birthday again, Ismail. 🤍</Line>
        <div className="h-8" />
        <Line delay={500} size="sm">
          Made with a little too much effort.
        </Line>
        <div className="h-6" />
        <Line delay={900} size="sm">
          — Ayzal
        </Line>
      </Section>
    </main>
  );
}
