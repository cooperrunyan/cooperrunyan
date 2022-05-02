import type { SVGAttributes } from 'react';
import { pallette } from '~/config/pallette';

export const Signature = (props: SVGAttributes<any> & { color?: 'black' | 'white' | 'grey' | 'black' }) => (
  <svg
    width="225"
    height="46"
    viewBox="0 0 225 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ ...props.style, color: pallette[props.color] }}>
    <path
      d="M81.9615 3.87509C73.5674 0.324344 60.7219 1.46461 51.8646 3.75389C41.3486 6.47184 31.8718 10.5632 23.7542 15.2332C14.9717 20.2855 6.60919 26.2217 2.95721 33.1708C1.23605 36.4459 0.412002 40.8027 6.47854 42.6591C14.1137 44.9955 24.5194 43.6402 32.0007 41.828C43.068 39.1472 53.1735 35.3977 62.8498 31.3355C67.9768 29.1833 72.6297 26.7511 78.5906 25.3794C82.1359 24.5636 78.6979 27.4681 77.9283 28.1843C73.9792 31.8607 68.115 34.79 64.4449 38.5901C61.9512 41.1727 63.6897 41.9771 68.6585 41.3779C79.4414 40.0771 89.6389 36.7168 99.8389 34.4347C106.721 32.8951 114.68 30.3687 122.171 30.0716C125.939 29.922 129.71 30.3775 133.487 30.3659C150.913 30.3126 168.53 28.0713 185.615 26.3143C198.032 25.0372 210.685 23.1977 223.356 23.1977"
      stroke={pallette[props.color]}
      strokeWidth="2.59313"
      strokeLinecap="round"
    />
  </svg>
);
