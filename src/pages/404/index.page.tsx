import style from './style/404.module.scss';
import Head from 'next/head';

import { ErrorGraphic } from './graphic.component';

import { Back } from '~/components/back/back.component';
import { Portfolio } from '~/components/portfolio/portfolio.component';

const Error = () => (
  <Portfolio>
    <Head>
      <title>404: Page not found</title>
    </Head>
    <div className={style.Err}>
      <ErrorGraphic className={style.Graphic} />
      <div className={style.content}>
        <h2>404</h2>
        <h3>Page not found</h3>
        <Back color="white" />
      </div>
    </div>
  </Portfolio>
);

export default Error;