// Packages
import React, { Component } from 'react'

// Layouts
import Page from '../layouts/page'

// Containers
import { HomeContainer } from '../containers/home'

class Home extends Component {
  render() {
    return (
      <Page>
        <main>
          <HomeContainer />
        </main>
      </Page>
    )
  }
}

export default Home
