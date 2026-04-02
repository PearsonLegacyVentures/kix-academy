import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/blocks/HeroSection";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { StatsRow } from "@/components/blocks/StatsRow";
import { CTABlock } from "@/components/blocks/CTABlock";
import { ClipboardCheck, HeartHandshake, Goal, MessageSquareHeart } from "lucide-react";

const standards = [
  {
    icon: ClipboardCheck,
    title: "Structured Sessions",
    description:
      "Every session has a clear objective so players and parents understand what progress looks like week to week.",
  },
  {
    icon: Goal,
    title: "Development Before Hype",
    description:
      "We prioritize technical quality, confidence, and decision-making over short-term noise or empty promises.",
  },
  {
    icon: HeartHandshake,
    title: "Respect & Discipline",
    description:
      "Players are coached to compete with intensity while respecting teammates, coaches, officials, and opponents.",
  },
  {
    icon: MessageSquareHeart,
    title: "Parent Clarity",
    description:
      "Families get direct communication about expectations, progression, and the best pathway for their child.",
  },
];

const framework = [
  { value: "U4–U6", label: "Foundation stage" },
  { value: "U7–U10", label: "Development stage" },
  { value: "U11–U15", label: "Competitive stage" },
  { value: "Nassau", label: "Training locations" },
];

export default function About() {
  return (
    <PageLayout>
      <HeroSection
        eyebrow="Academy"
        heading="A disciplined coaching culture built for long-term growth."
        description="Kix Academy is built around structure, accountability, and confidence. We help players improve with purpose while giving parents a clear, trusted development path."
        variant="centered"
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Families choose Kix Academy because the environment is serious, positive, and clear. Players are challenged at the right level and coached with consistent standards.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            We focus on how players train, think, compete, and carry themselves. That means technical detail, game understanding, and character are developed together.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our role is simple: help each player become more confident, more disciplined, and more prepared for the demands of higher competition.
          </p>
        </div>
      </Section>

      <StatsRow stats={framework} />

      <Section>
        <SectionHeading
          eyebrow="Coaching Standards"
          heading="What parents can expect from day one."
          description="These standards shape every training block, match day, and player conversation."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {standards.map((value) => (
            <div key={value.title} className="rounded-xl border border-border bg-card p-6 md:p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-foreground">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABlock
        heading="Want to see where your child fits?"
        description="Share your child’s age and experience. We’ll guide you to the most suitable training group."
        primaryCta={{ label: "Register Interest", href: "/contact" }}
      />
    </PageLayout>
  );
}
