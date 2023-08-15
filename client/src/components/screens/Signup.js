import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import M from 'materialize-css'

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const PostData = () => {
    fetch('/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: password,
        email: email
      })
    }).then(res => res.json())
      .then(data => {
        console.log("Success:", data);
        if(data.error){
          M.toast({html:data.error,classes:"#c62828 red darken-3"})
        }else{
          M.toast({html:data.message, classes:"#43a047 green darken-1"})
          alert("Succefully Signin")
          navigate('/signin')
        }
        
         
      })
      .catch((error) =>{
        alert('Error:', error);
      })
  }
  return (
    <div className='mycard'>
      <div className='card auth-card input-field'>
        <h2>Sign up</h2>
        <input
          type='text'
          placeholder='Username'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          placeholder=' Email Address...'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn waves-effect waves-light #1565c0 blue darken-3" onClick={PostData}>
          Sign Up
        </button>
        <h5>
          <Link to='/signin'>Already have an account ?</Link>
        </h5>
      </div>
    </div>
  )
}

export default Signup