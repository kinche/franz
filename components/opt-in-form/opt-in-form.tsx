// Packages
import React from 'react'
import { Choose } from 'react-extras'
import { useForm } from '@statickit/react'

// UI
import { Button } from '../../ui/button'
import { colors, radius, responsive, spacing } from '../../ui/theme'

// Utils
import { SIZE_LARGE } from '../../utils/constants'

export const OptInForm = () => {
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

            <Button type="submit" size={SIZE_LARGE}>
              Join beta list
            </Button>
          </Choose.Otherwise>
        </Choose>
      </div>

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
