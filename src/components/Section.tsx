import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  direction?: 'up' | 'down';
}

const Section = ({ children, direction = 'down' }: SectionProps) => {
  const gradientDirection = direction === 'up' ? 'to top' : 'to bottom';

  return (
    <div 
      className="relative rounded-3xl overflow-hidden p-8 md:p-16 mb-16 mx-4 md:mx-12 lg:mx-16"
      style={{
        background: `linear-gradient(${gradientDirection}, var(--section-start), var(--section-end))`
      }}
    >
      {children}
    </div>
  );
};

export default Section;