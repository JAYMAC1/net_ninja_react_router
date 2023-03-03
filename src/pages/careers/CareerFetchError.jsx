import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const CareerFetchError = () => {
  const error = useRouteError()
  return (
    <div className='career-error'>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to='/'>Return to homepage</Link>
    </div>
  )
}

export default CareerFetchError
