// Packages
import React from 'react'
import { useForm } from '@statickit/react'
import { Choose } from 'react-extras'

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

            <button type="submit" style={{ marginLeft: '16px' }}>
              Join beta list
            </button>
          </Choose.Otherwise>
        </Choose>
      </div>

      <span>
        If you already have an account,{' '}
        <a href={`${process.env.AUTHENTICATION_SERVICE}/auth/github`}>sign in here</a>.
      </span>

      <style jsx={true}>{`
        form {
          max-width: 600px;
        }

        .form-content {
          border: 0;
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        .text-field {
          width: 100%;
        }

        label {
          font-size: 14px;
          font-weight: 600;
          display: block;
          color: #777;
          margin-bottom: 4px;
        }

        input {
          width: 100%;
          padding: 16px;
          border: 1px solid #dddfe4;
          border-radius: 6px;
          font-size: 18px;
          outline: none;
        }

        button {
          display: inline-block;
          font-size: 18px;
          padding: 16px 24px;
          color: #fff;
          background-color: #0045ff;
          border-radius: 6px;
          white-space: nowrap;
          cursor: pointer;
          border: 1px solid #0045ff;
        }

        span {
          display: block;
          margin-top: 16px;
          font-style: italic;
          font-size: 16px;
          color: #777;
        }

        a {
          font-style: italic;
          font-size: 16px;
        }
      `}</style>
    </form>
  )
}

export default OptInForm
