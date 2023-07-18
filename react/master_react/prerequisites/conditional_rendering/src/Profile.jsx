import React, { useState } from 'react'

const Profile = () => {
    const [loggedIn,setloggedIn] = useState(true)
    const [count,setCount] = useState(0)
    const createTrue=()=>{
        setCount(count + 1)
    }
    const createFalse=()=>{
        setCount(count - 1)
    }

  return (
    <>
        <h1>Conditional Rendering</h1>
        {count ==1?<h1>You are logged in</h1>:<h1>You are not logged in</h1>}
        <p>User is logged in : {count}</p>
        <button onClick={createTrue}>True</button>
        <button onClick={createFalse}>False</button>
    </>
    
  )
}

export default Profile;