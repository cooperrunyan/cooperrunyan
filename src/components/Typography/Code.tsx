import { font } from '@/config/font';
import { color } from '@/config/style';
import { HTMLAttributes } from 'react';

export const Code: React.FC<
  HTMLAttributes<HTMLSpanElement> & { ref?: any }
> = props => {
  return (
    <code
      data-testid={(props as any)['data-testid']}
      {...props}
      hidden={false}
      style={{
        fontFamily: font.mono.family,
        fontWeight: font.mono.weight,
        color: color('50'),
        letterSpacing: '-0.01em',
        cursor: props.hidden ? 'default' : undefined,
        userSelect: props.hidden ? 'none' : undefined,
        ...props.style,
      }}>
      {props.children}
    </code>
  );
};
