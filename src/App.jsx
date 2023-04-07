import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // const handleClick = () => {
  //   setCount(count + 1)
  // }

  // const [person, setPerson] = useState({
  //   name: 'peter',
  //   age: 24,
  //   hobby: 'read books'
  // })

  // const updatePerson = () => {
  //   setPerson({ name: 'Jason', age: 28, hobby: 'driving the car' })
  // }

  // const handleClick = () => {
  //   setValue(current => {
  //     return current + 1
  //   })
  // }

  // return (
  //   <>
  //     <h3>{person.name}</h3>
  //     <h3>{person.age} </h3>
  //     <h3>{person.hobby}</h3>
  //     <button className='btn' onClick={updatePerson}>
  //       update person
  //     </button>
  //   </>
  // )

  const [value, setValue] = useState(0)

  // const handleClick = () => {
  //   setTimeout(() => {
  //     console.log('button clicked')
  //     setValue(value + 1)
  //   }, 3000)
  // }

  const handleClick = () => {
    setTimeout(() => {
      console.log('button clicked')
      setValue(cur => cur + 1)
    }, 3000)
  }

  return (
    <div>
      <h1>{value}</h1>
      <button className='btn' onClick={handleClick}>
        Inclease
      </button>
      <button className='btn' onClick={() => setValue(cur => cur + 1)}>
        Add
      </button>
    </div>
  )

  // return <h1>Our first Vite project with React!</h1>

  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </div>
  // )
}

export default App
