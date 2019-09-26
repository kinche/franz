// Packages
import { NextPageContext } from 'next'
import { destroyCookie } from 'nookies'

export function removeCookie(name: string, ctx?: NextPageContext) {
  return destroyCookie(ctx, name)
}
