// Packages
import React from 'react'
import { NextPageContext } from 'next'
import { withRouter } from 'next/router'

// Utils
import { getCookie, removeCookie } from '../utils/cookies'
import { api } from '../utils/api'

const onRedirect = (ctx: NextPageContext, location: string) => {
  const { res } = ctx

  if (res) {
    res.writeHead(302, { Location: location })
    res.end()
  }
}

const withAuth = Page => {
  const withAuth = props => <Page {...props} />

  withAuth.getInitialProps = async (context: NextPageContext) => {
    const { req } = context
    const token = getCookie(process.env.KINCHE_COOKIES_TOKEN, context)
    const props = { ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}) }

    if (token) {
      try {
        const user = await api('/account', { headers: { authorization: token } })

        if (req.url === '/') {
          return onRedirect(context, '/dashboard')
        }

        return { user, ...props }
      } catch (error) {
        removeCookie(process.env.KINCHE_COOKIES_TOKEN, context)
        return onRedirect(context, '/')
      }
    }

    if (req.url !== '/') {
      return onRedirect(context, '/')
    }

    return { ...props }
  }

  withAuth.displayName = `withAuth(${Page.displayName || Page.name || 'Unknown'})`

  return withRouter(withAuth)
}

export default withAuth
