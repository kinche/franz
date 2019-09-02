// Packages
import React, { Component } from 'react'

// Layouts
import Page from '../layouts/page'

// Components
import OptInForm from '../components/opt-in-form'

class Home extends Component {
  render() {
    return (
      <Page>
        <main>
          <div className="content">
            <div className="content-left">
              <h1>
                franz is the first
                <br />
                benchmark analytics.
              </h1>

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
            padding: 200px;
            display: flex;
            align-items: center;
            height: 100vh;
          }

          .content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          .content-left,
          .content-right {
            flex-basis: 50%;
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
        `}</style>
      </Page>
    )
  }
}

export default Home
