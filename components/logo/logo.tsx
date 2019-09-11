// Packages
import React, { PureComponent } from 'react'

// Types
import { LogoProps } from './logo.interface'

export class Logo extends PureComponent<LogoProps> {
  static defaultProps = {
    size: '200px'
  }

  render() {
    const { size } = this.props

    return (
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
        <rect width="200" height="200" rx="30" fill="black" />
        <rect x="37.4996" y="43.75" width="125" height="25" rx="5" fill="white" />
        <rect x="37.4996" y="87.5" width="75" height="25" rx="5" fill="white" />
        <rect x="37.4996" y="131.25" width="37.5" height="25" rx="5" fill="white" />
      </svg>
    )
  }
}
