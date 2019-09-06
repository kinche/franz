// Packages
import React from 'react'
import { useForm } from '@statickit/react'
import { Choose } from 'react-extras'

// UI
import { colors, radius, responsive, spacing } from '../ui/theme'

const OptInForm = () => {
  const [state, submit] = useForm(process.env.STATICKIT_ID)

  return (
    <form onSubmit={submit}>
      <div className="form-content">
        <Choose>
          <Choose.When condition={state.succeeded}>
            <h2>Thanks for joining our beta list! We'll contact you soon.</h2>
          </Choose.When>

          <Choose.Otherwise>
            <div className="text-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="Email address" />
            </div>

            <button type="submit">Join beta list</button>
          </Choose.Otherwise>
        </Choose>
      </div>

      <span>
        If you already have an account,{' '}
        <a href={`${process.env.AUTHENTICATION_SERVICE}/auth/github`}>sign in here</a>.
      </span>

      <style jsx={true}>{`
        .form-content {
          border: 0;
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .text-field {
          width: 100%;
        }

        label {
          font-size: 14px;
          font-weight: 600;
          display: block;
          color: ${colors.gray.default};
          margin-bottom: ${spacing.small};
        }

        input {
          width: 100%;
          padding: ${spacing.medium};
          border: 1px solid ${colors.gray.lighter};
          border-radius: ${radius.medium};
          font-size: 18px;
          outline: none;
        }

        button {
          font-size: 18px;
          padding: ${spacing.medium} ${spacing.large};
          color: ${colors.white};
          background-color: ${colors.primary.default};
          border-radius: ${radius.medium};
          white-space: nowrap;
          cursor: pointer;
          border: 1px solid ${colors.primary.default};
          width: 100%;
          text-align: center;
          display: block;
          margin-left: 0;
          margin-right: 0;
          margin-top: ${spacing.large};
          margin-bottom: ${spacing.large};
        }

        span {
          display: block;
          margin-top: ${spacing.medium};
          font-style: italic;
          font-size: 16px;
          color: ${colors.gray.default};
        }

        a {
          font-style: italic;
          font-size: 16px;
        }

        @media ${responsive.small} {
          .form-content {
            flex-wrap: nowrap;
          }

          .text-field {
            margin-right: ${spacing.medium};
          }

          button {
            display: inline-block;
            margin: 0;
            width: auto;
          }
        }
      `}</style>
    </form>
  )
}

export default OptInForm
