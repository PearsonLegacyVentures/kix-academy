import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/blocks/HeroSection";
import { ContactForm } from "@/components/blocks/ContactForm";

export default function Contact() {
  return (
    <PageLayout>
      <HeroSection
        eyebrow="Contact & Registration"
        heading="Tell us about your child and we’ll guide you to the right program."
        description="Share age group, experience, and preferred location. Our team will follow up with the best next step for your family."
      />

      <ContactForm
        heading="Start your registration enquiry."
        description="We’ll reply with program fit, session options, and next steps."
      />
    </PageLayout>
  );
}
