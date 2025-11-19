

type buttonProps = {
  setShowForm:React.Dispatch<React.SetStateAction<boolean>>
}

const Button = ( {setShowForm}:buttonProps) => {
  
  return (
    <div className="flex justify-end p-4 my-5">
      <button onClick={()=>setShowForm(prev => !prev)} className="font-medium text-white transition duration-200 ease-in bg-blue-800 px-4 py-2 rounded-md cursor-pointer hover:scale-110 hover:bg-blue-700">
        Add Vocabulary
      </button>
    </div>

  )
}

export default Button