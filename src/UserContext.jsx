import React, { createContext, useState } from 'react'
export const formContext = createContext()

const UserContext = ({ children }) => {

    const [createUser, setCreateUser] = useState({
        username: "",
        email: "",
        imgUrl: ""
    })

    const updateUser = (data)=>{
        setCreateUser(data)
    }

    return (
        <div>
            <formContext.Provider value={{createUser, updateUser}}>
                {children}
            </formContext.Provider>
        </div>
    )
}

export default UserContext
