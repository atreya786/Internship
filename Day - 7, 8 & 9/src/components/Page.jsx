import React from 'react'

const Page = (props) => {
  return (
    <div className='border'>
      {/* <h1>{props.name}</h1>
      <h3>{props.image}</h3>
      <h3>{props.country}</h3>
      <p>{props.trips}</p> */}
      <h1>{props.userId}</h1>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
}

export default Page
