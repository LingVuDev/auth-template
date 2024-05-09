import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className='h-full flex items-center justify-center bg-sky-800'>{children}</div>
  )
}

export default AuthLayout