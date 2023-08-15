import React, { useEffect, createContext, useReducer } from 'react';
import { Navbar } from './components/Navbar';
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/screens/Home';
import Signin from './components/screens/Signin';
import Signup from './components/screens/Signup';
import Profile from './components/screens/Profile';
import CreatePost from './components/screens/CreatePost';
import { reducer, initialState } from './reducers/userReducer'

export const UserContext = createContext()


const Routing = () => {
  const history = useNavigate()
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    // console.log(typeof(user))
    if(user){
      history('/')
    }else{
      history('/signin')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/createpost' element={<CreatePost />} />
    </Routes>
  )
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
