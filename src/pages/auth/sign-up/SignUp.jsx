import axios from 'axios';
import React, { useState } from 'react'

const SignUp = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        avatar: "https://picsum.photos/800",
    })

    console.log(formData);

    const handleLoginUser = (e) => {
        console.log(formData);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const CreateUser = (e) => {
        e.preventDefault()
   fetch(" https://api.escuelajs.co/api/v1/users", {
    method: "POST",
    formData
})
   .then(res => res.json())
   .then(data => console.log(data))
      
         
    }

  return (
    <div>
        <form onSubmit={CreateUser}>
            <input name='name' onChange={handleLoginUser} type="text" placeholder='Name...' />
            <input name='email' onChange={handleLoginUser} type="email" placeholder='Email...' />
            <input name='password' onChange={handleLoginUser} type="password" placeholder='Password...' />
    <button type='submit'>Create</button>
        </form>
    </div>
  )
}

export default SignUp
