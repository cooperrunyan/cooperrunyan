/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';

import Layout from 'c/Layout.tsx';

import { useEffect, useRef } from 'preact/hooks';
import { useMediaQuery } from 'hooks/useMediaQuery.ts';
import { config } from 'config';

export default function Snake() {
  const matches = useMediaQuery('screen');

  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', ' ', 'p'].includes(
          e.key,
        )
      )
        ref.current!.contentWindow!.postMessage(
          { type: 'snake-keyboard-event', key: e.key },
          '*',
        );
    };

    window.addEventListener('keydown', handler);
  }, []);

  return (
    <Layout noFooter>
      {!matches && (
        <iframe
          ref={ref}
          class={tw`h-[calc(100vh-11rem)] border-1 border-grey8 rounded`}
          src={`https://cooperrunyan-snake.netlify.app/?secondary=${encodeURIComponent(
            config.colors.white,
          )}&primary=${encodeURIComponent(
            config.colors.primary,
          )}&bg=${encodeURIComponent(
            config.colors.black,
          )}&fg=${encodeURIComponent(config.colors.white)}`}
        />
      )}
      {matches && (
        <div class={tw`mt-12`}>
          <h1
            class={tw`font-bold text-7xl sm:text-6xl xxs:text-5xl tracking-tighter leading-none`}>
            Your device is not supported for snake
          </h1>
        </div>
      )}
    </Layout>
  );
}
