import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>Sorry, this page or item cannot be found. Please return <Link to='/'>Home</Link>!</div>
    )
}

export default NotFound