import { useEffect, useState } from 'react'

const MultipleReturnsBasic = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  // can return entire app
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  return <h2>My App</h2>
}

export default MultipleReturnsBasic
