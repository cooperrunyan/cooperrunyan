import Head from 'next/head';
import { useState } from 'react';
import { pallette } from '~/config/pallette';
import style from './style/contact.module.scss';

import { Footer } from '~/components/footer/footer.component';
import { Nav } from '~/components/nav/nav.component';
import { Portfolio } from '~/components/portfolio/portfolio.component';

import { ContactForm } from './form.component';

const Contact = () => {
  const [hooray, setHooray] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Portfolio>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="center">
        <Nav />
        <section className={style.Contact}>
          <h2>Contact</h2>
          <ContactForm hooray={[hooray, setHooray]} loading={[loading, setLoading]} />
          <svg className={style.circle} width="841" height="841" viewBox="0 0 841 841" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="420.5" cy="420.5" r="420.5" fill={pallette.grey} />
          </svg>
        </section>
      </div>
      <>
        {/* Hooray page */}
        {hooray && (
          <div className={style.hooray}>
            <h1>Message Sent!</h1>
          </div>
        )}

        {/* Loading page */}
        {loading && (
          <div className={style.loading}>
            <h4>Loading...</h4>
          </div>
        )}
      </>
      <Footer />
    </Portfolio>
  );
};

export default Contact;
