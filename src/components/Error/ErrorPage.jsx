import React from 'react'
import { NavLink } from 'react-router-dom'
import  './errorPage.css'

const ErrorPage = () => {
  return (
    <div className='error-container'>
        <h1>404</h1>
        <h2>Page Not Found!</h2>
        <h4>We cannot find the page you are requesting</h4>
        <NavLink to="/" className='btn btn-error'>Take me home</NavLink>
    </div>
  )
}

export default ErrorPage