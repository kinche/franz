// Packages
import { NextPageContext } from 'next'
import { parseCookies } from 'nookies'

export function getCookie(name: string, ctx?: NextPageContext) {
  const cookies = parseCookies(ctx)
  const cookie = cookies[name] || ''

  return cookie
}
