import { font } from '@/config/font';
import { style } from '@/config/style';
import { percent } from '@/css';
import { HTMLAttributes } from 'react';

export const Code: React.FC<HTMLAttributes<HTMLSpanElement>> = props => {
  return (
    <code
      {...props}
      style={{
        fontFamily: font.mono.family,
        fontWeight: font.mono.weight,
        color: style.colors.layer[64],
        letterSpacing: percent(-1),
        ...props.style,
      }}>
      {props.children}
    </code>
  );
};
