// Packages
import { NextPageContext } from 'next'
import { setCookie } from 'nookies'

export function saveCookie(name: string, value: any, ctx?: NextPageContext, options = {}) {
  const date = new Date()
  const oneDay = date.setDate(date.getDate() + 1)
  const cookieOptions = Object.assign(
    {},
    { maxAge: oneDay, path: '/', domain: process.env.COOKIES_VALUE },
    options
  )
  setCookie(ctx, name, value, cookieOptions)
}
