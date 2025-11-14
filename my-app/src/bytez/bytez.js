import Bytez from "bytez.js"

const key = import.meta.env.VITE_Bytez
const sdk = new Bytez(key)

// choose Text-to-Image
const model = sdk.model("ZB-Tech/Text-to-Image")

// send input to model
const { error, output } = await model.run("A cat in a wizard hat")

console.log({ error, output });