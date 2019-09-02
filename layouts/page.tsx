// Packages
import React, { Component, Fragment } from 'react'
import Head from 'next/head'

// Root
import pkg from '../package.json'

interface PageProps {
  children: any
}

class Page extends Component<PageProps> {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <Head>
          <title>
            {pkg.name} — {pkg.description}
          </title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />

          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/static/favicon.png" type="image/png" />
        </Head>

        {children}

        <style jsx={true} global={true}>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'IBM Plex Sans', 'SF UI Display', 'Helvetica Neue', 'Helvetica', 'Arial',
              'sans-serif';
            font-display: Swap;
            font-style: Normal;
            font-weight: Normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
            font-feature-settings: 'liga';
          }

          img {
            max-width: 100%;
          }

          a {
            color: #0045ff;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }

          fieldset {
            border: 0;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default Page
