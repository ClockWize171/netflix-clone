import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { user, signIn } = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }
  return (
    <div className='w-full h-screen'>
      <img
        className='absolute w-full h-full object-cover'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/bd147060-9e9a-4f7f-a12c-1238964d591b/MM-en-20220523-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign In</h1>
            {error ? <p className='p-3 bg-red-500 my-3'>{error}</p> : null}
            <form
              onSubmit={handleSubmit}
              className='w-full flex flex-col py-4'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 my-2 bg-gray-600 rounded'
                type="email"
                placeholder='Email'
                autoComplete='email' />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 my-2 bg-gray-600 rounded'
                type="password"
                placeholder='Password'
                autoComplete='currentPassword' />
              <button
                className='bg-red-600 hover:bg-red-500 py-3 my-6 rounded font-bold'>
                Login
              </button>
              <div className='flex justify-between items-center'>
                <p><input className='mr-2' type="checkbox" /> Remember Me</p>
                <p>Need Help?</p>
              </div>
              <p className='py-4'>
                <span className='text-gray-600'>
                  Create Account to Netflix?
                </span>
                {' '}
                <Link className='underline hover:opacity-60' to='/signup'>Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login