// Packages
import React, { Component, Fragment } from 'react'
import Head from 'next/head'

// Root
import pkg from '../package.json'
import { colors } from '../ui/theme'

interface PageProps {
  children: any
}

if ('document' in global) {
  const info = [
    `Version: ${pkg.version}`,
    `Find the code here: https://github.com/${pkg.repository}`,
    `Have a great day! 🎉`
  ]

  for (const message of info) {
    console.log(message)
  }
}

class Page extends Component<PageProps> {
  render() {
    const { children } = this.props
    const description =
      "franz runs and analyses your benchmarks as part of your CI pipeline so that you'll be able to spot and alert on performance variations throughout time."

    return (
      <Fragment>
        <Head>
          <title>
            {pkg.name} — {pkg.description}
          </title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="theme-color" content={colors.primary.default} />
          <meta name="description" content={description} />
          <meta name="keywords" content={pkg.keywords.join(',')} />

          <meta name="twitter:title" content={`${pkg.name} — ${pkg.description}`} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content="https://franz.kinche.co/static/cover.png" />
          <meta name="twitter:card" content="summary_large_image" />

          <meta property="og:title" content={`${pkg.name} — ${pkg.description}`} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="https://franz.kinche.co/static/cover.png" />
          <meta property="og:url" content="https://franz.kinche.co" />
          <meta property="og:type" content="website" />

          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/static/favicon.png" type="image/png" />
          <link rel="apple-touch-icon" href="/static/icon.png" />
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
            color: ${colors.primary.default};
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
