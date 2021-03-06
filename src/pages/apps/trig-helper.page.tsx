// eslint-disable-next-line no-use-before-define
import type React from 'react';

import Head from 'next/head';
import { Portal } from '~/components/portal/portal.component';
import { Portfolio } from '~/components/portfolio/portfolio.component';

const TrigHelper: React.FC = () => (
  <Portfolio>
    <Head>
      <title>Trig Helper</title>
    </Head>
    <Portal url={new URL('https://trig-helper.herokuapp.com')} />
  </Portfolio>
);

export default TrigHelper;
