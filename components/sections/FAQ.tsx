import { faqItems } from "@/lib/data/faq";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="container-max">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          description="Common questions from pastors and media teams about sermon editing, reels, and working together."
        />

        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
