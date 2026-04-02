import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { HeroSection } from "@/components/blocks/HeroSection";
import { TrustStrip } from "@/components/blocks/TrustStrip";
import { ServiceCardGrid } from "@/components/blocks/ServiceCardGrid";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTABlock } from "@/components/blocks/CTABlock";
import { ImageStorySection } from "@/components/blocks/ImageStorySection";
import { Button } from "@/components/ui/button";
import { Brain, Shield, Timer, Trophy, Compass, Target, Users, Zap, HeartHandshake } from "lucide-react";

const programs = [
  {
    icon: Target,
    title: "U4–U6 Foundation",
    description: "Fun, movement-heavy sessions that build first-touch confidence, balance, coordination, and love for the game.",
    href: "/services",
    imageUrl: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Young children practicing football fundamentals on a grass field",
  },
  {
    icon: Users,
    title: "U7–U9 Skill Building",
    description: "Players sharpen passing, dribbling, and teamwork habits through structured activities and small-sided games.",
    href: "/services",
    imageUrl: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Youth football players in orange jerseys working on team play",
  },
  {
    icon: Zap,
    title: "U10–U12 Performance",
    description: "Training becomes more intentional with stronger decision-making, positional understanding, and match composure.",
    href: "/services",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Pre-teen football players during a competitive youth match",
  },
  {
    icon: Trophy,
    title: "U13–U15 Competitive Pathway",
    description: "Higher standards for intensity, accountability, and match readiness for players targeting advanced competition.",
    href: "/services",
    imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Teen football players competing for the ball in a high-intensity game",
  },
];

const pillars = [
  {
    icon: Brain,
    title: "Technical Quality",
    description: "Ball mastery, first touch, passing detail, and finishing are coached with high repetition and clear standards.",
    imageUrl: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Youth football player controlling the ball during drill work",
  },
  {
    icon: Shield,
    title: "Discipline & Standards",
    description: "Players learn structure, accountability, and respect through consistent expectations every week.",
    imageUrl: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Football coach speaking with focused youth players during training",
  },
  {
    icon: HeartHandshake,
    title: "Confidence",
    description: "A positive coaching environment helps players compete bravely and recover quickly from mistakes.",
    imageUrl: "https://images.unsplash.com/photo-1606925797300-0b35e9f9f68d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Young football players celebrating a successful play together",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Communication, support, and role responsibility are developed through game-real scenarios.",
    imageUrl: "https://images.unsplash.com/photo-1543357480-c60d40007a3f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Youth football team coordinating in a match situation",
  },
  {
    icon: Compass,
    title: "Match Intelligence",
    description: "Players are trained to scan early, recognize patterns, and make better decisions under pressure.",
    imageUrl: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Youth football match showing tactical positioning and movement",
  },
  {
    icon: Timer,
    title: "Conditioning",
    description: "Age-appropriate fitness habits improve speed, recovery, and consistency across full sessions and matches.",
    imageUrl: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Youth football players running conditioning drills on the field",
  },
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

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1400&q=80",
    alt: "Youth player sprinting with the football during a training game",
  },
  {
    src: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=1400&q=80",
    alt: "Group of youth football players preparing before kickoff",
  },
  {
    src: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1400&q=80",
    alt: "Coach guiding youth football players through positioning drills",
  },
];

export default function Home() {
  return (
    <PageLayout>
      <HeroSection
        eyebrow="Kix Academy · Nassau, Bahamas"
        heading="Youth football development built on discipline, confidence, and real progress."
        description="Kix Academy helps players from U4 to U15 grow through structured training, positive coaching, and match-ready habits that parents can trust. Founded by Jared Higgs."
        primaryCta={{ label: "Join Kix Academy", href: "/contact" }}
        secondaryCta={{ label: "View Programs", href: "/services" }}
        variant="left"
        imageUrl="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Youth football players training with a coach on a full-size field"
      />

      <TrustStrip
        label="Built for Nassau families"
        brands={[
          "U4–U15 Programs",
          "Founder: Jared Higgs",
          "Local Match Pathway",
          "Travel Team Opportunities",
          "NSA Field + Winton Rugby Center",
        ]}
      />

      <Section className="pt-6 md:pt-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-eyebrow">Training Culture</p>
            <h2 className="mt-3 text-headline">A serious football environment that still keeps kids motivated.</h2>
          </div>
          <Button asChild variant="hero-outline">
            <Link to="/contact">Book an Intro Session</Link>
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {galleryImages.map((image) => (
            <div key={image.src} className="overflow-hidden rounded-2xl border border-border/70 bg-card">
              <img src={image.src} alt={image.alt} loading="lazy" className="h-64 w-full object-cover md:h-72" />
            </div>
          ))}
        </div>
      </Section>

      <ServiceCardGrid
        eyebrow="Programs"
        heading="Each age group has a clear development objective."
        description="From foundational confidence to competitive readiness, every stage is coached with age-appropriate structure."
        services={programs}
      />

      <FeatureGrid
        eyebrow="Development Focus"
        heading="What we build in players week after week."
        description="Every focus area is trained with practical drills, clear standards, and match application."
        features={pillars}
        columns={3}
        variant="muted"
      />

      <ImageStorySection
        eyebrow="Parent Confidence"
        heading="Clear coaching. Clear expectations. Clear progression."
        description="We keep communication direct so families understand what their child is working on and what the next step looks like. Players are challenged with high standards while being supported to improve with confidence."
        imageUrl="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Youth football player controlling the ball while coach watches closely"
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
        heading="Ready to place your child in the right program?"
        description="Share your child’s age and current level, and we’ll guide you to the best next step for training in Nassau."
        primaryCta={{ label: "Start Registration", href: "/contact" }}
        secondaryCta={{ label: "See Program Pathway", href: "/services" }}
        variant="dark"
      />
    </PageLayout>
  );
}
