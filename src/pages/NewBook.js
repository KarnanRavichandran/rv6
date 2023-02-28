import React from 'react'
import { Link } from 'react-router-dom'
const NewBook = () => {
  return (
    <>
    <div>BookList</div>
    <ul>
        <li> <Link to = "/newbook">LINKBOOK</Link></li>
    </ul>
    </>
  )
}

export default NewBook