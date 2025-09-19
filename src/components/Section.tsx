import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  direction?: 'up' | 'down';
}

const Section = ({ children, direction = 'down' }: SectionProps) => {
  const gradientDirection = direction === 'up' ? 'to top' : 'to bottom';
  
  const backgroundStyle = {
    background: `linear-gradient(${gradientDirection}, var(--section-start), var(--section-end))`,
    boxShadow: 'var(--section-shadow)'
  };

  return (
    <div 
      className="relative  rounded-3xl shadow-sm overflow-hidden p-8 md:p-16 mb-16 mx-6 md:mx-14 lg:mx-20"
      style={backgroundStyle}
    >
      {children}
    </div>
  );
};

export default Section;