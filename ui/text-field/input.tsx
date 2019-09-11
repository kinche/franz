// Packages
import React, { PureComponent } from 'react'

// UI
import { colors, radius, responsive, spacing } from '../theme'

// Types
import { TextFieldProps } from './text-field.interface'

export class Input extends PureComponent<TextFieldProps> {
  static defaultProps = {
    disabled: false,
    readOnly: false,
    type: 'text'
  }

  render() {
    const {
      disabled,
      label,
      name,
      onChange,
      onFocus,
      placeholder,
      readOnly,
      style,
      type,
      value
    } = this.props

    return (
      <div className="text-field" style={style}>
        <label htmlFor={name}>{label}</label>

        <input
          disabled={disabled}
          id={name}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          readOnly={readOnly}
          type={type}
          value={value}
        />

        <style jsx={true}>{`
          .text-field {
            width: 100%;
          }

          label {
            color: ${colors.gray.default};
            display: block;
            font-size: 14px;
            margin-bottom: ${spacing.default};
            font-weight: 500;
          }

          input {
            color: ${colors.gray.default};
            width: 100%;
            font-size: 16px;
            line-height: 26px;
            padding: ${spacing.medium};
            border-radius: ${radius.medium};
            border: 1px solid ${colors.gray.lighter};
            outline: none;
          }

          input::placeholder {
            color: ${colors.text};
          }
        `}</style>
      </div>
    )
  }
}
