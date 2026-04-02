import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/blocks/HeroSection";
import { ServiceCardGrid } from "@/components/blocks/ServiceCardGrid";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { CTABlock } from "@/components/blocks/CTABlock";
import { ImageStorySection } from "@/components/blocks/ImageStorySection";
import { Baby, Footprints, Trophy, Check } from "lucide-react";

const programs = [
  {
    icon: Baby,
    title: "U4–U6 Foundation",
    description: "Ball familiarity, coordination, and confidence in a structured, age-appropriate environment.",
  },
  {
    icon: Footprints,
    title: "U7–U10 Development",
    description: "Technical repetition, game understanding, and consistency habits that build smarter players.",
  },
  {
    icon: Trophy,
    title: "U11–U15 Competitive Pathway",
    description: "Higher standards in training and match preparation for players targeting serious competition.",
  },
];

const parentFitChecks = [
  "Age-appropriate coaching plans",
  "Clear standards and session structure",
  "Local match pathway for applied learning",
  "Travel-team opportunities for ready players",
  "Direct parent communication on progression",
  "Training at NSA Field and Winton Rugby Center",
];

export default function Services() {
  return (
    <PageLayout>
      <HeroSection
        eyebrow="Programs"
        heading="Training tracks designed for U4–U15 progression."
        description="Each program has clear priorities, coaching standards, and competition expectations so parents can choose confidently."
        primaryCta={{ label: "Start Registration", href: "/contact" }}
        imageUrl="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Young football players in a structured training drill"
      />

      <ServiceCardGrid
        eyebrow="Age Groups"
        heading="Choose the right starting point."
        description="We place players by age and readiness, then coach toward steady progression."
        services={programs}
      />

      <ImageStorySection
        eyebrow="Built for Real Progress"
        heading="Every age group has clear priorities and measurable standards."
        description="We don’t run generic sessions. Each stage is designed around what players should master next, so parents understand what development really looks like month to month."
        imageUrl="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Football coach guiding a group of children on the pitch"
        imageOnLeft
      />

      <Section variant="muted">
        <SectionHeading
          eyebrow="Parent Checklist"
          heading="How to know this is the right fit."
          description="If these priorities matter to your family, Kix Academy is likely a strong match."
        />
        <div className="mx-auto max-w-2xl">
          <div className="space-y-4">
            {parentFitChecks.map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded-lg bg-card border border-border p-4">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-accent" />
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTABlock
        heading="Need help choosing an age group?"
        description="Tell us your child’s age and football experience. We’ll recommend the right program path."
        primaryCta={{ label: "Register Interest", href: "/contact" }}
        secondaryCta={{ label: "View Match Pathway", href: "/work" }}
        variant="dark"
      />
    </PageLayout>
  );
}
