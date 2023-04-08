import { useEffect, useState } from 'react'

const Example = () => {
  const [condition, setCondition] = useState(true)

  if (condition) {
    return <h2>Hello There</h2>
  }

  useEffect(() => {
    console.log('hello there')
  }, [])

  return <h2>Example</h2>
}

export default Example
