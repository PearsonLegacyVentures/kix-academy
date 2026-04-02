import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/blocks/HeroSection";
import { TrustStrip } from "@/components/blocks/TrustStrip";
import { ServiceCardGrid } from "@/components/blocks/ServiceCardGrid";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTABlock } from "@/components/blocks/CTABlock";
import { ImageStorySection } from "@/components/blocks/ImageStorySection";
import { Brain, Shield, Timer, Trophy, Compass, Target, Users } from "lucide-react";

const programs = [
  {
    icon: Target,
    title: "U4–U6 Foundation",
    description: "Early ball confidence, movement basics, and positive team habits introduced through structured sessions.",
    href: "/services",
  },
  {
    icon: Users,
    title: "U7–U10 Development",
    description: "Technical quality, decision-making, and game understanding built through disciplined repetition.",
    href: "/services",
  },
  {
    icon: Trophy,
    title: "U11–U15 Competitive Pathway",
    description: "Higher standards, match readiness, and progression toward local competition and travel-team opportunities.",
    href: "/services",
  },
];

const pillars = [
  { icon: Brain, title: "Game Intelligence", description: "Players learn to read situations early and make smarter choices under pressure." },
  { icon: Shield, title: "Discipline & Standards", description: "Clear expectations create structure, accountability, and consistent progress." },
  { icon: Timer, title: "Age-Appropriate Progression", description: "Sessions are built for each stage of development, not one-size-fits-all drills." },
  { icon: Compass, title: "Confidence Under Pressure", description: "Players are coached to stay composed, compete with purpose, and trust their training." },
];

const pathway = [
  {
    number: "01",
    title: "Join the Right Age Group",
    description: "Parents share child age and experience so we can guide them into the right U4–U15 program track.",
  },
  {
    number: "02",
    title: "Train With Structure",
    description: "Players develop technical quality, fitness habits, and tactical awareness through focused weekly sessions.",
  },
  {
    number: "03",
    title: "Compete Locally",
    description: "Players apply what they learn in local matches, building confidence in real match conditions.",
  },
  {
    number: "04",
    title: "Progress to Travel Opportunities",
    description: "Players who meet standards can be considered for travel-team pathways with higher competitive demands.",
  },
];

const faqItems = [
  {
    question: "My child is new to football. Can they still join?",
    answer: "Yes. We place players by age and current level, then coach them with clear progression goals so they build confidence quickly.",
  },
  {
    question: "Where does training take place?",
    answer: "Kix Academy training currently runs at NSA Field and Winton Rugby Center in Nassau. Contact us for the latest weekly schedule by age group.",
  },
  {
    question: "How does the travel-team pathway work?",
    answer: "Travel opportunities are based on readiness, consistency, and coach assessment. Families receive clear expectations before any commitment.",
  },
  {
    question: "What should parents expect from the coaching environment?",
    answer: "Structured sessions, high standards, and direct communication. We coach players to improve skills, confidence, and team discipline over time.",
  },
];

export default function Home() {
  return (
    <PageLayout>
      <HeroSection
        eyebrow="Kix Academy · Nassau, Bahamas"
        heading="Disciplined youth football training that parents trust."
        description="From U4 to U15, we develop confident players through structured coaching, meaningful competition, and a clear pathway from training to match performance."
        primaryCta={{ label: "Register Interest", href: "/contact" }}
        secondaryCta={{ label: "View Programs", href: "/services" }}
        imageUrl="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Youth football players and coach during a focused field session"
      />

      <TrustStrip
        label="Built for Nassau families"
        brands={[
          "U4–U15 Programs",
          "Local Match Pathway",
          "Travel Team Opportunities",
          "NSA Field",
          "Winton Rugby Center",
        ]}
      />

      <ServiceCardGrid
        eyebrow="Programs"
        heading="A clear training path for every stage of development."
        description="Each age band has specific objectives so players improve with purpose, not guesswork."
        services={programs}
      />

      <FeatureGrid
        eyebrow="Development Focus"
        heading="What we coach every week."
        description="Our sessions are designed to build complete players on and off the pitch."
        features={pillars}
        columns={4}
        variant="muted"
      />

      <ImageStorySection
        eyebrow="The Coaching Environment"
        heading="High standards, without the pressure that burns kids out."
        description="We create a setting where players feel challenged and supported at the same time. Sessions are demanding, communication is clear, and every player knows what they need to improve next."
        imageUrl="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Youth football team listening to coaching instructions together"
      />

      <ProcessSteps
        eyebrow="Pathway"
        heading="From first session to higher competition."
        description="Parents get a clear view of how progression works at Kix Academy."
        steps={pathway}
      />

      <FAQSection
        eyebrow="Parent FAQ"
        heading="Straight answers before you commit."
        description="Everything you need to evaluate fit, expectations, and next steps."
        items={faqItems}
      />

      <CTABlock
        heading="Ready to find the right program for your child?"
        description="Tell us your child’s age group and preferred location. We’ll guide you to the best next step."
        primaryCta={{ label: "Start Registration", href: "/contact" }}
        secondaryCta={{ label: "See Match Pathway", href: "/work" }}
        variant="dark"
      />
    </PageLayout>
  );
}
