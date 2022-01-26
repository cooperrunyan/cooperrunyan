import { Motion } from 'source/components';

export function Glow() {
  return (
    <Motion.Div
      options={{
        from: {
          opacity: 0,
          transform: 'translate(-50%, -50%) scale(0)',
        },
        to: {
          opacity: 1,
          transform: 'translate(-50%, -50%) scale(1)',
        },
      }}
      className='glow'></Motion.Div>
  );
}
