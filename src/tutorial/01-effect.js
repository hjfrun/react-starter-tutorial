import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)
  const sayHello = () => {
    console.log('Hello there')
  }

  sayHello()

  useEffect(() => {
    console.log('Hello from first useEffect')
  }, [value])

  useEffect(() => {
    console.log('Hello from second useEffect')
  }, [secondValue])

  return (
    <div>
      <h1>value: {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click Me
      </button>
      <h1>second value: {secondValue}</h1>
      <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  )
}

export default App
