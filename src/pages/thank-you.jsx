import React from 'react';

import Hero from 'components/pages/thank-you/hero';
import JoinUs from 'components/shared/join-us';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const ThankYouPage = () => (
  <Layout>
    <Hero />
    <JoinUs />
  </Layout>
);

export default ThankYouPage;

export const Head = () => {
  const pageMetadata = {
    preventIndexing: true,
    title: 'Novu - Thanks for reaching out!',
    description:
      "We're looking forward to chatting soon. Someone from our team will reach out to you shortly.",
  };

  return <SEO {...pageMetadata} />;
};
