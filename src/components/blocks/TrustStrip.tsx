import { Section } from "@/components/layout/Section";

const defaultItems = [
  "U4–U15 Programs",
  "Structured Coaching",
  "Local Match Pathway",
  "Travel Team Opportunities",
];

interface TrustStripProps {
  label?: string;
  brands?: string[];
}

export function TrustStrip({ label = "Why parents choose Kix Academy", brands = defaultItems }: TrustStripProps) {
  return (
    <Section className="!py-12 md:!py-16">
      <p className="text-center text-sm font-medium text-muted-foreground mb-6">{label}</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {brands.map((brand) => (
          <span key={brand} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground/90 tracking-tight">
            {brand}
          </span>
        ))}
      </div>
    </Section>
  );
}
