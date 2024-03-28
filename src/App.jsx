/* eslint-disable react/prop-types */
import './App.css'
import Profile from './components/Profile/Profile'
import userData from './userData.json'


export default function App() {
  return (
    <>
      <h1>GOIT-REACT-HW-01</h1>
      <h2>Task #1</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h2>Task #2</h2>

      <h2>Task #3</h2>

    </>
  )
}

