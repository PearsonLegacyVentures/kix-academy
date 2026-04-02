import { Section } from "@/components/layout/Section";

interface ImageStorySectionProps {
  eyebrow: string;
  heading: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageOnLeft?: boolean;
  variant?: "default" | "muted";
}

export function ImageStorySection({
  eyebrow,
  heading,
  description,
  imageUrl,
  imageAlt,
  imageOnLeft = false,
  variant = "default",
}: ImageStorySectionProps) {
  return (
    <Section variant={variant}>
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className={imageOnLeft ? "md:order-1" : "md:order-2"}>
          <div className="overflow-hidden rounded-2xl border border-border/70">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="h-[280px] w-full object-cover sm:h-[360px] md:h-[420px]"
              loading="lazy"
            />
          </div>
        </div>
        <div className={imageOnLeft ? "md:order-2" : "md:order-1"}>
          <p className="text-eyebrow mb-4">{eyebrow}</p>
          <h2 className="text-headline text-balance">{heading}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </Section>
  );
}
