import React, {useState} from 'react'
import './signin.style.scss'


const SignIn: React.Fc = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = () => {
    setEmail('')
    setPassword('')
  }

  return (
    <div className='sign-in'>
      <h2>I Already have an Account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <input name="email" type="email" value={email} onChange={(event)=>{
          const {value} = event.target
          setEmail(value)
        }} required/>
        <label>Email</label>
        <input type="password" name="email" value={password} onChange={(event)=>{
          const {value} = event.target
          setPassword(value)
        }}  required/>
        <label>Password</label>

        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default SignIn