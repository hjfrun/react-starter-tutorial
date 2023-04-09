import { useState } from 'react'

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)

  return (
    <div>
      <button className='btn' onClick={() => setShowAlert(!showAlert)}>
        Toggle Alert
      </button>
      {showAlert && <Alert />}
    </div>
  )
}

const Alert = () => {
  return <div className='alert alert-danger'>Hello world</div>
}

export default ToggleChallenge