import { useState, useEffect } from 'react';
import { Link } from '~/components/link/link.component';
import style from './header.module.scss';

const BIRTH_YEAR = 2006;
const BIRTH_MONTH = 9;
const BIRTH_DAY = 27;
const STARTED_CODING_AGE = 13;

export const Header = () => {
  const [duration, setDuration] = useState(0);

  useEffect(() =>
    setDuration(
      new Date().getFullYear() - BIRTH_YEAR - (new Date().getMonth() > BIRTH_MONTH && new Date().getDate() >= BIRTH_DAY ? 0 : 1) - STARTED_CODING_AGE,
    ),
  );

  return (
    <div className={style.Header}>
      <BgDot />
      <h1>Cooper Runyan</h1>
      <p>
        Hello world, my name is Cooper Runyan, I&apos;m a full stack developer based in Phoenix Arizona. I have been learning new technologies and languages
        for&nbsp;
        {duration} years. To check out some of the things I&apos;ve made, checkout my GitHub account at&nbsp;
        <span>
          <Link href="https://github.com/cooperrunyan" newTab>
            github.com/cooperrunyan
          </Link>
        </span>
        . One thing you should know about me is that I am a <span>big</span> fan of Javascript
      </p>
    </div>
  );
};

const BgDot = () => {
  return (
    <svg className={style.bgDot} width="907" height="907" viewBox="0 0 907 907" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="453.5" cy="453.5" r="453.5" fill="var(--grey)" />
    </svg>
  );
};
