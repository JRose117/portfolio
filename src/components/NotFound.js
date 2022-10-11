import { Link } from 'react-router-dom'

const NotFound = () => {

  return (
    <div className="main">
      <div className="notFound-wrapper">
      <div className="notFound-container">
        <Link className="notFound-nav" to='/'> Click Here To Return To Joe's Portfolio </Link>
      </div>
      </div>
    </div>
  )
}

export default NotFound