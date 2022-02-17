import Router from 'next/router';
import { Motion, App, Signature } from 'src/components';
import SVG from 'public/svg/chevron.svg';
import { pallette } from 'src/config';

export function Error(): JSX.Element {
  return (
    <App className='error'>
      <main>
        <Motion.Div options={backOptions} onClick={() => Router.back()} className='back'>
          <SVG style={{ transform: 'rotate(-90deg)' }} /> Back
        </Motion.Div>
        <header className='header'>
          <Motion.Div options={errorOptions} className='code__wrapper'>
            <span className='code'>404</span>
          </Motion.Div>
          <Motion.Span options={lineOptions} className='split'></Motion.Span>
          <Motion.Div options={messageOptions} className='message__wrapper'>
            <span className='message'>This page does not exist.. yet!</span>
          </Motion.Div>
        </header>
        <Signature color={pallette.grey} />
      </main>
    </App>
  );
}

const errorOptions = {
  from: {
    transform: 'translateX(-3.2rem)',
    opacity: 0,
  },
  to: {
    transform: 'translateX(0rem)',
    opacity: 1,
  },
  settings: {
    nth: 2,
  },
};

const messageOptions = {
  from: {
    transform: 'translateX(3.2rem)',
    opacity: 0,
  },
  to: {
    transform: 'translateX(0rem)',
    opacity: 1,
  },
  settings: {
    nth: 2,
  },
};

const backOptions = {
  from: {
    transform: 'translateY(-150%)',
    opacity: 0,
  },
  to: {
    transform: 'translateY(0%)',
    opacity: 1,
  },
  settings: {
    nth: 2,
  },
};

const lineOptions = {
  from: {
    height: 0,
    opacity: 0,
  },
  to: {
    height: '1.75em',
    opacity: 1,
  },
  settings: {
    nth: 2,
  },
};