import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Login from './login';
import {People} from "./people";

function App() {
  const [user, setUser] = useState({
    data:{
      data: {
        token: "",
        user: {
          email: "",
          firstName: "",
          id: "",
          lasName: "",
          role: "",
        },
  }}});
  const [token, setToken] = useState('');
  const [userInfo, setUserInfo] = useState({
    email: "",
    firstName: "",
    id: "",
    lasName: "",
    role: "",
  });
  const [nav, setNav] = useState(1);

  function display(){
    switch(nav){
      case 1:
        return (
        <div>
          <People token={token}/>
        </div>)
      default: 
        return <h1>something default</h1>
    }
  }

  function handleLogOff(){
    setNav(0);
    setUser({data: {
      data:{
        token: "",
        user: {
          email: "",
          firstName: "",
          id: "",
          lasName: "",
          role: "",
        },
      }
    }})
  }

  useEffect(()=>{
    if(user.data){
       setToken(user.data.data.token);
       setUserInfo(user.data.data.user);
    }
  }, [user])

  return (
    <div className="App">
      {user.data.data.token === "" ? (
        <>
          <Login userSetter={setUser}/>
        </>
      ) : display()}
      {
        user.data.data.token !== ""  ? <button onClick={handleLogOff}>log out</button> : null
      }
    </div>
  );
}

export default App;
