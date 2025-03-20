import { useState } from "react"

const Profile = () => {

const [profile, setProfile] = useState({name: 'Lukas', age: 31})
const [inputValue, setInputValue] = useState("")
const [inputValueAge, setInputValueAge] = useState("")


const changeName = () => {
    setProfile({...profile, name: inputValue})
    setInputValue("")
}

const changeAge = () => {
    setProfile({...profile, age: inputValueAge})
    setInputValueAge("")
}


  return (
    <div>
        <h1>Name: {profile.name}</h1>
        <h1>Age: {profile.age}</h1>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="enter new name"/>
        <button onClick={changeName}>Update name</button>
        <input type="text" value={inputValueAge} onChange={(e) => setInputValueAge(e.target.value)} placeholder="enter new age"/>
        <button onClick={changeAge}>Update age</button>
    </div>
  )
}

export default Profile