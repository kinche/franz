// Packages
import React, { Component } from 'react'

// Components
import { OptInForm } from '../../components/opt-in-form'

// UI
import { colors, spacing } from '../../ui/theme'

export class HomeBetaList extends Component {
  render() {
    return (
      <div>
        <h1>
          franz is the first <span>benchmark analytics</span> platform.
        </h1>

        <h2>
          franz runs and analyses your benchmarks as part of your CI pipeline so that you'll be able
          to spot and alert on performance variations throughout time.
        </h2>

        <OptInForm />

        <style jsx={true}>{`
          h1 {
            font-size: 50px;
            font-weight: 400;
            color: ${colors.title};
          }

          h2 {
            font-size: 20px;
            line-height: 34px;
            margin-top: ${spacing.large};
            margin-bottom: ${spacing.xxLarge};
            color: ${colors.text};
          }

          span {
            color: ${colors.primary.default};
          }
        `}</style>
      </div>
    )
  }
}
