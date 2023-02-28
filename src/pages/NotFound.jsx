import React from 'react'
import { Link } from 'react-router-dom'

const NoFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore
        beatae, labore consequuntur deleniti nisi, voluptatem maxime, aut veniam
        in sit! Ipsa ea cumque eius optio accusantium saepe quia sunt expedita
        aliquam veniam assumenda, delectus maiores pariatur velit iure fuga
        tempora sint dolor. Provident dolore sit accusamus maxime accusantium
        veritatis.
      </p>

      <p>
        Go to the <Link to='/'>home page</Link>
      </p>
    </div>
  )
}

export default NoFound
