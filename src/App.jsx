import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import db from './firebase'
import { onSnapshot, collection } from 'firebase/firestore'


function App() {
  
  const [users, setUsers] = useState()

  useEffect(() => {
    onSnapshot(collection(db, 'users'), (snapshot) => {
      setUsers(snapshot.docs.map((doc) => doc.data()))
    })
  })

  console.log(users)

  return (
    <>
      <h1>Backend Score Test</h1>
      {users && users.map((user) => {
        return (
          <>
            <p>{user.Name}</p>
            <p>{user.Age}</p>
            <p>{user.Developer === true ? 'true' : 'false'}</p>
          </>
        )
      })}
    </>
  )
}

export default App
