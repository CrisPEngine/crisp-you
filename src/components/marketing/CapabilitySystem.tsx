import { capabilitySection } from "@/content/capabilities";
import { Section, SectionHeader } from "./Section";
import { InteractiveCapabilitySystem } from "./InteractiveCapabilitySystem";

export function CapabilitySystem() {
  return (
    <Section id="product" tone="deep" className="scroll-mt-36 lg:scroll-mt-44">
      <SectionHeader
        eyebrow={capabilitySection.eyebrow}
        heading={capabilitySection.heading}
        body={capabilitySection.body}
      />
      <InteractiveCapabilitySystem />
    </Section>
  );
}
