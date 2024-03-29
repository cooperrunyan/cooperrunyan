import { font } from '@/config/font';
import { rem } from '@/css';
import { HTMLAttributes } from 'react';

export const SectionTitle: React.FC<
  HTMLAttributes<HTMLHeadingElement>
> = props => {
  return (
    <h2
      data-testid={(props as any)['data-testid']}
      {...props}
      style={{
        fontFamily: font.sans.family,
        fontWeight: font.sans.bold,
        fontSize: rem(48),
        lineHeight: '100%',
        letterSpacing: '-0.05em',
        ...props.style,
      }}>
      {props.children}
    </h2>
  );
};
