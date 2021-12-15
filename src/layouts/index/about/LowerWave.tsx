import React from 'react';

export default function Svg({ className }: { className: string }): JSX.Element {
  return (
    <svg className={className} viewBox="0 0 1440 154" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1440 96.832L1396.8 83.9211C1353.6 71.0101 1281.6 45.1883 1195.2 38.7328C1123.2 32.2773 1036.8 45.1883 964.8 64.5547C878.4 83.9211 806.4 109.743 720 109.743C633.6 109.743 561.6 83.9211 475.2 90.3765C403.2 96.832 316.8 135.565 244.8 148.476C158.4 161.387 86.4001 148.476 43.2001 142.02L0 135.565V0H43.2001C86.4001 0 158.4 0 244.8 0C316.8 0 403.2 0 475.2 0C561.6 0 633.6 0 720 0C806.4 0 878.4 0 964.8 0C1036.8 0 1123.2 0 1195.2 0C1281.6 0 1353.6 0 1396.8 0H1440V96.832Z"
        fill="currentColor"
      />
    </svg>
  );
}