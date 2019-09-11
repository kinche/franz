// Packages
import React, { Component } from 'react'

// Components
import { Logo } from '../../components/logo'

// UI
import { ButtonHref } from '../../ui/button'
import { spacing } from '../../ui/theme'

// Utils
import { APPEARANCE_PRIMARY_SUBTLE } from '../../utils/constants'

export class HomeNavigation extends Component {
  render() {
    return (
      <header>
        <Logo size="38px" />

        <ButtonHref
          appearance={APPEARANCE_PRIMARY_SUBTLE}
          href={`${process.env.AUTHENTICATION_SERVICE}/auth/github`}
        >
          Sign in
        </ButtonHref>

        <style jsx={true}>{`
          header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: ${spacing.large};
            padding-bottom: ${spacing.large};
          }
        `}</style>
      </header>
    )
  }
}
