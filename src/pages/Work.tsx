import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/blocks/HeroSection";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTABlock } from "@/components/blocks/CTABlock";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { MapPin } from "lucide-react";

const competitionPathway = [
  {
    number: "01",
    title: "Consistent Training Habits",
    description: "Players build match-ready habits through attendance, effort, and coachability in weekly sessions.",
  },
  {
    number: "02",
    title: "Local Match Application",
    description: "Training outcomes are applied in local matches so players can learn composure and decision-making.",
  },
  {
    number: "03",
    title: "Readiness Assessment",
    description: "Coaches evaluate technical quality, mentality, and consistency before recommending higher pathways.",
  },
  {
    number: "04",
    title: "Travel Team Consideration",
    description: "Travel opportunities are offered to players who meet competitive and commitment standards.",
  },
];

const pathwayFaq = [
  {
    question: "Is every player expected to join travel teams?",
    answer: "No. Travel pathways are optional and based on readiness. Families can still gain full value from local development and match experience.",
  },
  {
    question: "How will parents know if a player is ready for more competition?",
    answer: "Coaches communicate progression based on training standards, match performance, and consistency over time.",
  },
  {
    question: "Where are sessions and match preparation based?",
    answer: "Kix Academy currently operates at NSA Field and Winton Rugby Center. Families can confirm current schedules directly with the academy.",
  },
  {
    question: "What matters most for progression?",
    answer: "Coachability, discipline, attendance, and steady improvement. Progression is earned through consistent standards, not shortcuts.",
  },
];

export default function Work() {
  return (
    <PageLayout>
      <HeroSection
        eyebrow="Matches & Travel"
        heading="A clear route from training sessions to competitive football."
        description="Kix Academy gives parents a transparent progression model: train with structure, compete locally, and pursue travel opportunities when players are ready."
      />

      <Section variant="muted">
        <SectionHeading
          eyebrow="Training Locations"
          heading="Built around Nassau families."
          description="Programs currently run across two core training venues."
        />
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {[
            "NSA Field, Nassau",
            "Winton Rugby Center, Nassau",
          ].map((location) => (
            <div key={location} className="rounded-xl border border-border bg-card p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground">
                <MapPin className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-foreground">{location}</p>
              <p className="mt-1 text-sm text-muted-foreground">Contact us for current age-group schedule and availability.</p>
            </div>
          ))}
        </div>
      </Section>

      <ProcessSteps
        eyebrow="Competition Pathway"
        heading="How progression decisions are made."
        description="We keep criteria transparent so families understand every step."
        steps={competitionPathway}
      />

      <FAQSection
        eyebrow="Pathway FAQ"
        heading="What parents usually ask about matches and travel."
        items={pathwayFaq}
      />

      <CTABlock
        heading="Want clarity on your child’s next competitive step?"
        description="Share your child’s age and current level. We’ll explain the most suitable pathway."
        primaryCta={{ label: "Register Interest", href: "/contact" }}
        variant="muted"
      />
    </PageLayout>
  );
}
