// Packages
import React, { Component } from 'react'
import { For } from 'react-extras'

// Layouts
import Page from '../../layouts/page'

// Components
import { RepositoryPreview } from '../../components/repository-preview'
import { PageTitle } from '../../components/page-title'

// UI
import { Button } from '../../ui/button'
import { Row } from '../../ui/row'

class Dashboard extends Component<{ repositories: any }> {
  static getInitialProps() {
    const data = [
      {
        id: '1',
        lastJob: {
          branch: 'master',
          date: '2min ago',
          id: '75'
        },
        name: 'authentication-service',
        organization: 'kinche'
      }
    ]

    return { repositories: data }
  }

  render() {
    const { repositories } = this.props

    return (
      <Page>
        <Row style={{ maxWidth: '960px' }}>
          <PageTitle title="Repositories" subtitle="You have 17 active repositories.">
            <Button type="button">Add repository</Button>
          </PageTitle>

          <main>
            <ul>
              <For
                of={repositories}
                render={(repository: any) => (
                  <RepositoryPreview key={repository.id} repository={repository} />
                )}
              />
            </ul>
          </main>
        </Row>
      </Page>
    )
  }
}

export default Dashboard
