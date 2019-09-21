// Packages
import React, { Component } from 'react'

// Layouts
import Page from '../../../../layouts/page'

// Components
import { PageTitle } from '../../../../components/page-title'

// UI
import { Row } from '../../../../ui/row'

class Repository extends Component {
  render() {
    return (
      <Page>
        <Row style={{ maxWidth: '960px' }}>
          <PageTitle title="Repository" />
        </Row>
      </Page>
    )
  }
}

export default Repository
