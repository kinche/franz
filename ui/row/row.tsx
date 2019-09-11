import React, { PureComponent } from 'react'

// UI
import { spacing } from '../theme'

// Interface
import { RowProps } from './row.interface'

export class Row extends PureComponent<RowProps> {
  render() {
    const { children, style } = this.props

    return (
      <div style={style}>
        {children}

        <style jsx={true}>{`
          div {
            width: 100%;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding-left: ${spacing.xLarge};
            padding-right: ${spacing.xLarge};
          }
        `}</style>
      </div>
    )
  }
}
