import React, { PureComponent } from 'react'

interface RowProps {
  children: any
  style?: React.CSSProperties
}

export class Row extends PureComponent<RowProps> {
  render() {
    const { children, style } = this.props

    return (
      <div style={style}>
        {children}

        <style jsx={true}>{`
          div {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 32px;
            padding-right: 32px;
          }
        `}</style>
      </div>
    )
  }
}
