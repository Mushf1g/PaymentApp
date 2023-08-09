import React from 'react'
import { Link } from 'react-router-dom'

function Studentuser({id,index, accountName, surname, email, username}) {
  return (
    <>
        <td>{index + 1}</td>
        <td>{accountName}</td>
        <td>{surname}</td>
        <td>{email}</td>
        <td>{username}</td>
        <td><Link to={`/studentedit/${id}`}>Edit</Link></td>
    </>
  )
}

export default Studentuser

