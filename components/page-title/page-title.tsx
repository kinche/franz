// Packages
import React, { PureComponent } from 'react'

// UI
import { colors, spacing } from '../../ui/theme'

// Types
import { PageTitleProps } from './page-title.interface'

export class PageTitle extends PureComponent<PageTitleProps> {
  render() {
    const { children, subtitle, title } = this.props

    return (
      <section>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>

        {children}

        <style jsx={true}>{`
          section {
            padding-top: ${spacing.xxxHuge};
            padding-bottom: ${spacing.xxxHuge};
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
          }

          h1 {
            font-size: 40px;
            font-weight: 300;
            color: ${colors.gray.darker};
          }

          h2 {
            font-size: 16px;
            font-weight: 400;
            color: ${colors.text};
            margin-top: ${spacing.small};
          }
        `}</style>
      </section>
    )
  }
}
