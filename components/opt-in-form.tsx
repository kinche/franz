// Packages
import React from 'react'
import { useForm } from '@statickit/react'
import { Choose } from 'react-extras'

// UI
import { colors, responsive } from '../ui/theme'

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
              <input type="email" name="email" placeholder="Email address" />
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
          margin-bottom: 4px;
        }

        input {
          width: 100%;
          padding: 16px;
          border: 1px solid ${colors.gray.lighter};
          border-radius: 6px;
          font-size: 18px;
          outline: none;
        }

        button {
          font-size: 18px;
          padding: 16px 24px;
          color: ${colors.white};
          background-color: ${colors.primary.default};
          border-radius: 6px;
          white-space: nowrap;
          cursor: pointer;
          border: 1px solid ${colors.primary.default};
          width: 100%;
          text-align: center;
          display: block;
          margin-left: 0;
          margin-right: 0;
          margin-top: 24px;
          margin-bottom: 24px;
        }

        span {
          display: block;
          margin-top: 16px;
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
            margin-right: 16px;
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
