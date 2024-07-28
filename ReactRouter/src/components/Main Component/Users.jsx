import React from 'react'
import { useParams } from 'react-router-dom'
function Users() {
     let {user}=useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {user}</div>
  )
}

export default Users