import React from 'react'
import './auth.style.scss'

import SignIn from '../../components/sign-in/SignIn'

const Auth: React.Fc = () => {
  return (
    <div className='sign-in'>
      <SignIn></SignIn>
    </div>
  )
}

export default Auth