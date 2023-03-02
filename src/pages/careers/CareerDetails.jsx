import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'

const CareerDetails = () => {
  const career = useLoaderData()
  return (
    <div className='career-details'>
      <h2>Career Details for {career.title} </h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className='details'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          repellat neque sed, aperiam quam nihil asperiores at quia magni minima
          iusto cumque nisi necessitatibus reiciendis animi recusandae est quos
          cum.
        </p>
      </div>
    </div>
  )
}

export default CareerDetails

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch(`http://localhost:4000/careers/${id}`)
  return res.json()
}
