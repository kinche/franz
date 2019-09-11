// Packages
import React, { PureComponent } from 'react'
import classnames from 'classnames'

// UI
import { colors, radius, responsive, spacing } from '../theme'

// Utils
import {
  APPEARANCE_PRIMARY,
  APPEARANCE_PRIMARY_SUBTLE,
  SIZE_LARGE,
  SIZE_MEDIUM,
  SIZE_SMALL
} from '../../utils/constants'

// Types
import { ButtonProps } from './button.interface'

export class Button extends PureComponent<ButtonProps> {
  static defaultProps = {
    appearance: APPEARANCE_PRIMARY,
    block: false,
    disabled: false,
    outline: false,
    size: SIZE_MEDIUM
  }

  render() {
    const { appearance, block, children, disabled, size } = this.props

    const className = classnames({
      primary: appearance === APPEARANCE_PRIMARY,
      'primary-subtle': appearance === APPEARANCE_PRIMARY_SUBTLE,
      large: size === SIZE_LARGE,
      medium: size === SIZE_MEDIUM,
      small: size === SIZE_SMALL,
      block,
      disabled
    })

    return (
      <button className={className} disabled={disabled}>
        <div className="button">{children}</div>

        <style jsx={true}>{`
          button {
            appearance: none;
            border: none;
            background-color: transparent;
            cursor: pointer;
            transition: 0.25s ease-in-out;
            display: block;
            width: 100%;
          }

          .button {
            white-space: nowrap;
            cursor: pointer;
            border: 1px solid transparent;
            text-align: center;
            font-weight: 500;
          }

          .${SIZE_MEDIUM} {
            font-size: 16px;
            line-height: 26px;
            padding: ${spacing.default} ${spacing.large};
            border-radius: ${radius.default};
          }

          .${SIZE_LARGE} {
            font-size: 16px;
            line-height: 26px;
            padding: ${spacing.medium} ${spacing.large};
            border-radius: ${radius.medium};
          }

          .${APPEARANCE_PRIMARY} {
            color: ${colors.white};
            background-color: ${colors.primary.default};
            border-color: ${colors.primary.default};
          }

          .${APPEARANCE_PRIMARY}:hover {
            background-color: ${colors.primary.dark};
            border-color: ${colors.primary.dark};
          }

          .${APPEARANCE_PRIMARY_SUBTLE} {
            background-color: ${colors.primary.soft};
            color: ${colors.primary.default};
            border-color: ${colors.primary.soft};
          }

          .${APPEARANCE_PRIMARY_SUBTLE}:hover {
            background-color: ${colors.primary.lighter};
            color: ${colors.primary.default};
            border-color: ${colors.primary.lighter};
          }

          @media ${responsive.small} {
            button {
              display: inline-block;
              width: auto;
            }
          }
        `}</style>
      </button>
    )
  }
}
