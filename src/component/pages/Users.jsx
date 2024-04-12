import React, { useContext } from 'react'
import { formContext } from '../../UserContext'

const Users = () => {
  const {createUser} = useContext(formContext)
  const { username, email, imgUrl} = createUser

  // const userCollection = [createUser]
  // console.log(userCollection)


  return (
    <div>
      <h1>Users</h1>
      <div>
        <pre>{JSON.stringify(createUser)}</pre>
      </div>
      <div>
        {/* {
          userCollection.map((users, index)=>(
            <ul>
              <li keys={index}>{users}</li>
            </ul>
          ))
        } */}
        username: {username}
        email: {email}
        img: {<img src={imgUrl}/>}
      </div>
    </div>
  )
}

export default Users
