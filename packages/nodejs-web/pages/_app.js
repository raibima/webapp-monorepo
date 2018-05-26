import React from 'react';

import App, { Container } from 'next/app';
import Layout from 'core/components/Layout';

export default class TvApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component />
        </Layout>
      </Container>
    )
  }
}