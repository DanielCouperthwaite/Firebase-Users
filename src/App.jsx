import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import db from './firebase'
import Select from 'react-select'
import { onSnapshot, collection, doc, addDoc } from 'firebase/firestore'


function App() {
  
  const [users, setUsers] = useState([])
  const [name, setName] = useState([])
  const [age, setAge] = useState([])
  const [isDev, setIsDev] = useState([])

  console.log(name)

  useEffect(() => {
    onSnapshot(collection(db, 'users'), (snapshot) => {
      setUsers(snapshot.docs.map((doc) => doc.data()))
    })
  })

  const handleNew = async (e) => {
    e.preventDefault()
    const collectionRef = collection(db, 'users');
    const payload = {Name: name, Age: age, Developer: isDev}
    await addDoc(collectionRef, payload);
  }

  console.log(users)

  const options = [
    {value: true, label: 'true'},
    {value: false, label: 'false'}
  ]

  return (
    <>
      <h1>Backend Score Test</h1>
      <form>
        <div>
          <label for="name">Name: 
          <input id="name" type='text' value={name} onChange={e => setName(e.target.value)}></input>
          </label>
        </div>
        <div>
          <label for="age">Age: </label>  
          <input type='number' id="age" onChange={e => setAge(e.target.value)}></input>
        </div>
        <div>
          <label for='isDev'></label>
          <Select id="isDev" options={options} onChange={e => setIsDev(e.target.value)}/>
        </div>
        
        <button className='button' onClick={handleNew}>New User</button>
      </form>
      {users && users.map((user) => {
        return (
          <li style={{border: '2px solid black'}} key={user.Name}>
            <p>Name:{user.Name}, </p>
            <p>Age: {user.Age}, </p>
            <p>Is a Developer? {user.Developer === true ? 'true' : 'false'}</p>
          </li>
        )
      })}
    </>
  )
}

export default App
