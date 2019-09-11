// Packages
import React from 'react'
import { Choose } from 'react-extras'
import { useForm } from '@statickit/react'

// UI
import { Button } from '../../ui/button'
import { Input } from '../../ui/text-field'
import { responsive, spacing } from '../../ui/theme'

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
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Email address"
              style={{ marginRight: spacing.medium }}
            />

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

        @media ${responsive.small} {
          .form-content {
            flex-wrap: nowrap;
          }
        }
      `}</style>
    </form>
  )
}
