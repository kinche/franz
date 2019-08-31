// Packages
import React, { Component } from 'react'

// Layouts
import Page from '../layouts/page'

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
            </div>

            <div className="content-right">
              <img src="static/product.png" />
            </div>
          </div>
        </main>

        <style jsx={true}>{`
          main {
            padding: 150px;
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

          h1 {
            font-size: 50px;
            font-weight: 400;
            color: #222;
          }
        `}</style>
      </Page>
    )
  }
}

export default Home
