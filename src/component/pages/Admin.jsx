import React, { useContext, useState } from 'react'
import { formContext } from '../../UserContext'

const Admin = () => {
  const {createUser, updateUser} = useContext(formContext)
  // const [createUser, setCreateUser] = useState({
  //   username: "",
  //   email: "",
  //   imgUrl: ""
  // })

  const { email, username, imgUrl } = createUser


  // const [img, setImg] = useState("")

  // const handleFile = ()=>{
  //   const file = e.target.files[0]
  //   const url = URL.createObjectURL(file)
  //   setImg(url)
  // }





  const handleChange = (e) => {
    const { value, name, files } = e.target
    //setCreateUser
    updateUser((prev) => ({
      ...prev,
      [name]: name === "imgUrl" ? URL.createObjectURL(files[0]) : value
      // [name]: name === "imgUrl" ? files[0] : value
      // [name]: value
    }))
  }

    const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(createUser)
    }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder='Username' value={username} onChange={handleChange} />
        <input type="email" name="email" placeholder='email' value={email} onChange={handleChange} />
        <input type="file"  name="imgUrl" onChange={handleChange} />
        {imgUrl && <img src={imgUrl} alt="ferrari"/>}
        <button type='submit'>Create user</button>
      </form>

      <div>
        Img: {<img src={imgUrl} alt="ferrari"/>}
      </div>
    </div>
  )
}

export default Admin
