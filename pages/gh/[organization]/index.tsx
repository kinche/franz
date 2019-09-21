// Packages
import React, { Component } from 'react'
import { NextPageContext } from 'next'

// Layouts
import Page from '../../../layouts/page'

// Components
import { PageTitle } from '../../../components/page-title'

// UI
import { Row } from '../../../ui/row'

interface OrganizationProps {
  organization: string
}

class Organization extends Component<OrganizationProps> {
  static getInitialProps({ query }: NextPageContext) {
    return { organization: query.organization }
  }

  render() {
    const { organization } = this.props

    return (
      <Page>
        <Row style={{ maxWidth: '960px' }}>
          <PageTitle title={organization} />
        </Row>
      </Page>
    )
  }
}

export default Organization
