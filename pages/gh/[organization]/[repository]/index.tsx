// Packages
import React, { Component } from 'react'
import { NextPageContext } from 'next'

// Layouts
import Page from '../../../../layouts/page'

// Components
import { PageTitle } from '../../../../components/page-title'

// UI
import { Row } from '../../../../ui/row'

interface RepositoryProps {
  organization: string
  repository: string
}

class Repository extends Component<RepositoryProps> {
  static getInitialProps({ query }: NextPageContext) {
    return { organization: query.organization, repository: query.repository }
  }

  render() {
    const { organization, repository } = this.props

    return (
      <Page>
        <Row style={{ maxWidth: '960px' }}>
          <PageTitle title={`${organization}/${repository}`} />
        </Row>
      </Page>
    )
  }
}

export default Repository
