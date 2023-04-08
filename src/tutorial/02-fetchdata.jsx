import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const url = 'https://api.github.com/users'

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const users = await response.json()
        setUsers(users)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  return (
    <section>
      <h3>github users</h3>
      <ul className='users'>
        {users.map(user => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default App
