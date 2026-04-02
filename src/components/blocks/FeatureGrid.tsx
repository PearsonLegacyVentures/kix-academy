import { Section } from "@/components/layout/Section";
import { SectionHeading } from "./SectionHeading";
import { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

interface FeatureGridProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: "default" | "muted";
}

const colClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

export function FeatureGrid({ eyebrow, heading, description, features, columns = 3, variant = "default" }: FeatureGridProps) {
  return (
    <Section variant={variant}>
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
      <div className={`grid gap-6 ${colClasses[columns]}`}>
        {features.map((feature) => (
          <article key={feature.title} className="group overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm">
            {feature.imageUrl && (
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={feature.imageUrl}
                  alt={feature.imageAlt ?? feature.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-foreground">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
