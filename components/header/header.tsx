// Packages
import React, { PureComponent } from 'react'
import { autoBind } from 'react-extras'

// Components
import { Logo } from '../../components/logo'

// UI
import { Button } from '../../ui/button'
import { spacing } from '../../ui/theme'

// Utils
import { APPEARANCE_PRIMARY_SUBTLE } from '../../utils/constants'
import { saveCookie } from '../../utils/cookies'

export class Header extends PureComponent {
  constructor(props: any) {
    super(props)

    autoBind(this)
  }

  onSignIn() {
    saveCookie(process.env.KINCHE_COOKIES_REDIRECT, process.env.FRONTEND_URL)
    const href = `${process.env.AUTHENTICATION_SERVICE}/auth/github`
    window.location.href = href
  }

  render() {
    return (
      <header>
        <Logo size="38px" />

        <Button type="button" appearance={APPEARANCE_PRIMARY_SUBTLE} onClick={this.onSignIn}>
          Sign in
        </Button>

        <style jsx={true}>{`
          header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: ${spacing.xxxLarge};
          }
        `}</style>
      </header>
    )
  }
}
