import type { HTMLAttributes } from 'react';

export type LogoProps = HTMLAttributes<HTMLDivElement>;

export const BrandingLogo = ({ className, ...props }: LogoProps) => {
  return (
    <div className={className} {...props}>
      <span className="text-2xl font-bold">DokuHR</span>
    </div>
  );
};
