import React, { useState } from 'react';
import { FaWindowClose } from "react-icons/fa";
import { addword } from '../store/vocabulary/VocabularySlice';
import type { RootState } from '../store/vocabulary/VocabularyStore';
import { useDispatch, useSelector } from 'react-redux';
const Tables = () => {
  const [formData, setFormData] = useState<string>('')
  const dispatch = useDispatch()
  const vocabulary = useSelector((state: RootState) => state.vocabulary.list)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(addword(formData))

    setFormData('')
    console.log(vocabulary);

  }

  return (
    <div>
      {/*This is table section  */}
      <div className="overflow-x-auto mx-4">
        <table className="border-collapse border w-full min-w-[600px] md:min-w-[900px]">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="border border-gray-300 px-4 py-2">English Word</th>
              <th className="border border-gray-300 px-4 py-2">EN-Meaning</th>
              <th className="border border-gray-300 px-4 py-2">ML-Meaning</th>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 ">Pronunciation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Indiana</td>
              <td className="border border-gray-300 px-4 py-2">Indianapolis</td>
              <td className="border border-gray-300 px-4 py-2">Indianapolis</td>
              <td className="border border-gray-300 px-4 py-2">Indianapolis</td>
              <td className="border border-gray-300 px-4 py-2">Indianapolis</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* This is the form section */}
      <form action="" onSubmit={handleSubmit} className='  border-0 rounded-md shadow-2xl  absolute top-8 left-2/6 flex flex-col bg-amber-50 w-[500px] items-center justify-center h-[400px]'>
        <FaWindowClose className='absolute top-3 right-3 cursor-pointer transition duration-150 hover:scale-110' />
        <h2 className='mb-8  '>ഇന്നത്തെ പുതിയ വാക്ക്</h2>
        <input value={formData} onChange={(e) => setFormData(e.target.value)} type="text" className='px-2 border-2 border-blue-600 rounded-md outline-none h-11 w-80 font-semibold mb-4' />
        <button onClick={() => handleSubmit} className='transition cursor-pointer duration-200 ease-in-out w-20 h-auto px-4 py-2 text-white bg-blue-800 border hover:scale-110 rounded-md'>Add</button>
      </form>
    </div>
  );
};

export default Tables;
