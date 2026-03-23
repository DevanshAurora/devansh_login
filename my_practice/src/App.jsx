import { useState } from 'react'
import './App.css'
import Login from './Login';
import Dashboard from './Dashboard';
function App() {
  const [user,setUser]=useState(null);
  return (
    <>
    {user ?(
      <Dashboard user={user} setUser={setUser}/>
      ):(
        <Login setUser={setUser}/>
      )}
    </>
  )
}

export default App
