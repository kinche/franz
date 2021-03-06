// Packages
import React, { Component, Fragment } from 'react'

// Containers
import { HomeBetaList } from './home-beta-list'

// Components
import { Header } from '../../components/header'

// UI
import { Row } from '../../ui/row'
import { spacing, responsive } from '../../ui/theme'

export class HomeContainer extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Row>
          <section className="hero">
            <div>
              <HomeBetaList />
            </div>

            <div>
              <img src="static/product.png" alt="GitHub example with franz benchmark" />
            </div>
          </section>

          <style jsx={true}>{`
            .hero {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-top: ${spacing.xxxHuge};
              padding-bottom: ${spacing.xxxHuge};
              flex-wrap: wrap;
            }

            .hero div {
              order: 1;
              flex-basis: 100%;
            }

            .hero div + div {
              order: 0;
            }

            @media ${responsive.small} {
              .hero div {
                flex-basis: 50%;
              }

              .hero div + div {
                order: 1;
              }
            }
          `}</style>
        </Row>
      </Fragment>
    )
  }
}
