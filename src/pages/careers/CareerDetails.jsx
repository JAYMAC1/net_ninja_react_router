import React from 'react'
import { useParams } from 'react-router-dom'

const CareerDetails = () => {
  const { id } = useParams()
  return (
    <div className='career-details'>
      <h2>{id}</h2>
    </div>
  )
}

export default CareerDetails
