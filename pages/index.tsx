// Packages
import React, { Component } from 'react'

// Layouts
import Page from '../layouts/page'

// Components
import OptInForm from '../components/opt-in-form'

// UI
import { responsive } from '../ui/theme'

class Home extends Component {
  render() {
    return (
      <Page>
        <main>
          <div className="content">
            <div className="content-left">
              <h1>franz is the first benchmark analytics.</h1>

              <h2>
                franz runs and analyses your benchmarks as part of your CI pipeline so that you'll
                be able to spot and alert on performance variations throughout time.
              </h2>

              <OptInForm />
            </div>

            <div className="content-right">
              <img src="static/product.png" />
            </div>
          </div>
        </main>

        <style jsx={true}>{`
          main {
            display: flex;
            align-items: center;
            height: 100vh;
            padding: 32px;
          }

          .content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          .content-left {
            flex-basis: 100%;
          }

          .content-right {
            display: none;
          }

          h1 {
            font-size: 50px;
            font-weight: 400;
            color: #222;
          }

          h2 {
            font-size: 20px;
            line-height: 34px;
            max-width: 600px;
            margin-top: 24px;
            margin-bottom: 40px;
            color: #777;
          }

          @media ${responsive.small} {
            main {
              padding: 48px;
            }

            .content-left,
            .content-right {
              flex-basis: 50%;
            }

            .content-right {
              display: block;
            }

            h1 {
              max-width: 600px;
            }
          }

          @media ${responsive.large} {
            main {
              padding: 80px;
            }
          }
        `}</style>
      </Page>
    )
  }
}

export default Home
