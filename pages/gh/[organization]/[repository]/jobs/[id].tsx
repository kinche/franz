// Packages
import React, { Component } from 'react'
import { NextPageContext } from 'next'

// Layouts
import Page from '../../../../../layouts/page'

// Components
import { PageTitle } from '../../../../../components/page-title'

// UI
import { Row } from '../../../../../ui/row'

interface JobDetailsProps {
  job: string
}

class JobDetails extends Component<JobDetailsProps> {
  static getInitialProps({ query }: NextPageContext) {
    return { job: query.id }
  }

  render() {
    const { job } = this.props

    return (
      <Page>
        <Row style={{ maxWidth: '960px' }}>
          <PageTitle title={`#${job}`} />
        </Row>
      </Page>
    )
  }
}

export default JobDetails
