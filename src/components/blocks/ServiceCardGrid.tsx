import { Section } from "@/components/layout/Section";
import { SectionHeading } from "./SectionHeading";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  imageUrl?: string;
  imageAlt?: string;
}

interface ServiceCardGridProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  services: Service[];
}

export function ServiceCardGrid({ eyebrow, heading, description, services }: ServiceCardGridProps) {
  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const content = (
            <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-lg">
              {service.imageUrl && (
                <div className="aspect-[4/3] overflow-hidden border-b border-border/80 bg-muted">
                  <img
                    src={service.imageUrl}
                    alt={service.imageAlt ?? service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6 md:p-7">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-foreground">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                {service.href && (
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                )}
              </div>
            </div>
          );

          return service.href ? (
            <Link key={service.title} to={service.href}>{content}</Link>
          ) : (
            <div key={service.title}>{content}</div>
          );
        })}
      </div>
    </Section>
  );
}
