import  { useEffect, useState } from 'react'
import Button from './components/Button'
import Tables from './components/Tables'
import AmazingLoader from './components/loader'
const App = () => {
  const [showForm , setShowForm] = useState<boolean>(false)
  const [loading , setLoading] = useState<boolean>(true)

  useEffect(()=>{
    const loader = setTimeout(()=>{
      setLoading(false)
    },15000)

    return () => clearTimeout(loader);
  },[])

  return (
    <div>
      {loading ? <AmazingLoader/> :(
      <>
      <Button setShowForm={setShowForm} />
      <Tables showForm={showForm} setShowForm={setShowForm}/>
      </>
      )}
    </div>
  )
}

export default App