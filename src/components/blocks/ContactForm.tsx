import { Section } from "@/components/layout/Section";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  eyebrow?: string;
  heading: string;
  description?: string;
}

export function ContactForm({ eyebrow, heading, description }: ContactFormProps) {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow={eyebrow} heading={heading} description={description} align="left" className="mb-8" />
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold mb-1">Email</h4>
              <p className="text-sm text-muted-foreground">hello@kixacademy.com</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-1">Phone</h4>
              <p className="text-sm text-muted-foreground">+1 (242) 000-0000</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-1">Training Locations</h4>
              <p className="text-sm text-muted-foreground">NSA Field and Winton Rugby Center, Nassau, Bahamas</p>
            </div>
            <div className="rounded-lg border border-border bg-muted/40 p-4">
              <p className="text-sm text-muted-foreground">
                Please include your child&apos;s age and playing experience so we can recommend the most suitable group quickly.
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="parentName" className="text-sm font-medium mb-1.5 block">Parent/Guardian name</label>
              <Input id="parentName" placeholder="Alicia Rolle" />
            </div>
            <div>
              <label htmlFor="childName" className="text-sm font-medium mb-1.5 block">Child name</label>
              <Input id="childName" placeholder="Kai Rolle" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-1.5 block">Email</label>
              <Input id="email" type="email" placeholder="parent@email.com" />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium mb-1.5 block">Phone</label>
              <Input id="phone" placeholder="+1 (242) ..." />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="ageGroup" className="text-sm font-medium mb-1.5 block">Age group</label>
              <Input id="ageGroup" placeholder="U7, U10, U13..." />
            </div>
            <div>
              <label htmlFor="location" className="text-sm font-medium mb-1.5 block">Preferred location</label>
              <Input id="location" placeholder="NSA Field or Winton Rugby Center" />
            </div>
          </div>
          <div>
            <label htmlFor="experience" className="text-sm font-medium mb-1.5 block">Playing experience</label>
            <Input id="experience" placeholder="New to football / 2 years club / school team..." />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium mb-1.5 block">Anything we should know?</label>
            <Textarea id="message" placeholder="Share goals, schedule constraints, or questions..." rows={5} />
          </div>
          <Button variant="hero" type="submit" className="w-full sm:w-auto">Submit Registration Enquiry</Button>
        </form>
      </div>
    </Section>
  );
}
