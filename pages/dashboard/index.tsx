// Packages
import React, { Component, Fragment } from 'react'
import { For } from 'react-extras'

// HOCs
import withAuth from '../../hocs/with-auth'

// Layouts
import Page from '../../layouts/page'

// Components
import { Header } from '../../components/header'
import { PageTitle } from '../../components/page-title'
import { RepositoryPreview } from '../../components/repository-preview'

// UI
import { Button } from '../../ui/button'
import { Row } from '../../ui/row'

class Dashboard extends Component<{ repositories: any; user: any }> {
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
    const { repositories, user } = this.props

    return (
      <Page>
        <Header user={user} />

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

export default withAuth(Dashboard)
