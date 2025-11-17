import React, { useEffect } from 'react'
import Button from './components/Button'
import Tables from './components/Tables'
import Bytez from "bytez.js"

const App = () => {
  const check = async () => {

    const key = import.meta.env.VITE_Bytez
    const sdk = new Bytez(key)

    // choose Text-to-Image
    const model = sdk.model("ZB-Tech/Text-to-Image")

    // send input to model
    const { error, output } = await model.run("A cat in a wizard hat")

    console.log(error, "...This is an error ");
    console.log(output, "This is an ouput");


  }


  useEffect(() => {
    check()
  }, [])

  return (
    <div>
      <Button />
      <Tables />
    </div>
  )
}

export default App