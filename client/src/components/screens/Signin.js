import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'
import M from 'materialize-css'

const Signin = () => {
  const {state,dispatch} = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
const navigate = useNavigate();
  const PostData = () => {
    fetch('/signin', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      
      })
    }).then(res => res.json())
      .then(data => {
        console.log("Success:", data);
        if(data.error){
          M.toast({html:data.error,classes:"#c62828 red darken-3"})
          
        }else{
          localStorage.setItem("jwt",data.token)
          localStorage.setItem("user",JSON.stringify(data.user))
           dispatch({type:"USER",payload:data.user})
          M.toast({html:"Signdin success", classes:"#43a047 green darken-1"})
          alert("login successfull")
          navigate('/')
        }
        
      })
      .catch((error) =>{
        alert("Error", error)
      })
  }
    return (
      <div className='mycard'>
      <div className='card auth-card input-field'>
        <h2>Log In</h2>
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
        <button className="btn waves-effect waves-light #1565c0 blue darken-3" onClick={()=>PostData()}>
        Login
        </button>
        <h5>
          <Link to='/signup'>Don't have an account ?</Link>
        </h5>
      </div>
    </div>
    )
}

export default Signin