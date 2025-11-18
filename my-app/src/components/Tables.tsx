import React, { useEffect, useState } from 'react';
import { FaWindowClose } from "react-icons/fa";
import axios from 'axios';
import {formDate } from "../lib/utile"
import {formatMeaning} from "../lib/formating"
const Tables = () => {
  const [formData, setFormData] = useState<string>('')
  const [vocabulary , setVocabulary] = useState<string[]>([])
  const [loading , isLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData);
    
     await axios.post('http://localhost:3001/api/vocabulary',{word:formData})
   
    

  }
  const gellAllData = async () =>{
    try {
      const res = await axios.get("http://localhost:3001/api/vocabulary")
      setVocabulary(res?.data?.vocabulary)
      
    }catch(err){
      console.log(err);
      
    }
  }
  useEffect(()=>{
    gellAllData()
  },[])

  return (
    <div>
      {/*This is table section  */}
      <div className="overflow-x-auto mx-4">
        <table className="border-collapse border w-full min-w-[600px] md:min-w-[900px]">
          <thead className="bg-blue-600 text-white">
            <tr>
                <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">English Word</th>
              <th className="border border-gray-300 px-4 py-2">EN-Meaning</th>
            </tr>
          </thead>
          <tbody>
          
          {
            vocabulary.map((item , index)=>(
                
             <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{formDate(item?.createdAt)}</td>
              <td className="border border-gray-300 px-4 py-2">{item?.englishWord}</td>
              <td className="border border-gray-300 px-4 py-2">{formatMeaning(item?.englishMeaning)}</td>
            
            </tr> 
            ))
          }
            
          </tbody>
        </table>
      </div>
      {/* This is the form section */}
      <form action="" onSubmit={handleSubmit} className='hidden  border-0 rounded-md shadow-2xl  absolute top-8 left-2/6 flex flex-col bg-amber-50 w-[500px] items-center justify-center h-[400px]'>
        <FaWindowClose className='absolute top-3 right-3 cursor-pointer transition duration-150 hover:scale-110' />
        <h2 className='mb-8  '>ഇന്നത്തെ പുതിയ വാക്ക്</h2>
        <input value={formData} onChange={(e) => setFormData(e.target.value)} type="text" className='px-2 border-2 border-blue-600 rounded-md outline-none h-11 w-80 font-semibold mb-4' />
        <button onClick={() => handleSubmit} className='transition cursor-pointer duration-200 ease-in-out w-20 h-auto px-4 py-2 text-white bg-blue-800 border hover:scale-110 rounded-md'>Add</button>
      </form>
    </div>
  );
};

export default Tables;
