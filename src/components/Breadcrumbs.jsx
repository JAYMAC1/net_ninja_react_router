import React from 'react'
import { useLocation, Link } from 'react-router-dom'
const Breadcrumbs = () => {
  const location = useLocation()
  let currentLink = ''

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink = currentLink + `/${crumb}`
      return (
        <div className='crumb' key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  console.log(crumbs)
  return <div className='breadcrumbs'>{crumbs}</div>
}

export default Breadcrumbs