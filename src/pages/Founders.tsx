import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/blocks/HeroSection";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { CTABlock } from "@/components/blocks/CTABlock";
import { ImageStorySection } from "@/components/blocks/ImageStorySection";

const founders = [
  {
    name: "Coach Andre Miller",
    role: "Co-Founder & Technical Director",
    bio: "Andre leads player development standards across all age groups. His focus is technical discipline, match intelligence, and building confident habits under pressure.",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Coach Natalie Saunders",
    role: "Co-Founder & Academy Operations Lead",
    bio: "Natalie oversees academy structure, parent communication, and weekly training execution. She ensures every family experiences clear standards and consistent follow-through.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
];

const principles = [
  "Lead with standards, not shortcuts.",
  "Develop people and players together.",
  "Keep parent communication direct and honest.",
  "Reward consistency over hype.",
];

export default function Founders() {
  return (
    <PageLayout>
      <HeroSection
        eyebrow="Founders"
        heading="The leadership team behind Kix Academy’s coaching culture."
        description="Our founders built Kix Academy to give Nassau families a premium youth football environment with clear standards, clear communication, and clear progression."
        primaryCta={{ label: "Register Interest", href: "/contact" }}
        imageUrl="https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Coaches standing with youth football players after training"
      />

      <Section>
        <SectionHeading
          eyebrow="Founding Team"
          heading="Built by coaches who value structure and long-term development."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {founders.map((founder) => (
            <article key={founder.name} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={founder.image}
                alt={`${founder.name}, ${founder.role}`}
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 md:p-7">
                <p className="text-sm font-medium text-accent">{founder.role}</p>
                <h3 className="mt-2 text-xl font-semibold">{founder.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{founder.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <ImageStorySection
        eyebrow="Leadership Philosophy"
        heading="Our job is to make development standards visible and consistent."
        description="Founders stay close to the work: session quality, coach alignment, and family communication. That consistency is what gives players confidence and gives parents trust."
        imageUrl="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1400&q=80"
        imageAlt="Coach and youth player discussing tactics beside the pitch"
        variant="muted"
        imageOnLeft
      />

      <Section>
        <SectionHeading
          eyebrow="What Guides Us"
          heading="Four principles that shape every season."
        />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {principles.map((principle) => (
            <div key={principle} className="rounded-xl border border-border bg-card p-5">
              <p className="text-sm font-medium text-foreground">{principle}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABlock
        heading="Want to see if Kix Academy is the right fit?"
        description="Tell us your child’s age, current level, and preferred training location."
        primaryCta={{ label: "Start Registration", href: "/contact" }}
      />
    </PageLayout>
  );
}
