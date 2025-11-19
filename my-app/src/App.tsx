import React, { useState } from 'react'
import Button from './components/Button'
import Tables from './components/Tables'

const App = () => {
  const [showForm , setShowForm] = useState<boolean>(false)

  return (
    <div>
      <Button setShowForm={setShowForm} />
      <Tables showForm={showForm} setShowForm={setShowForm}/>
    </div>
  )
}

export default App