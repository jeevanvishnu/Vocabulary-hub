import React, { useEffect, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import axios from 'axios';
import {toast} from 'react-toastify';
import { formDate } from '../lib/utile';
import { formatMeaning } from '../lib/formating';

type vocabulary = {
  englishWord: string;
  englishMeaning: string;
  createdAt: string;
};

type showFormProps = {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const Tables = ({ showForm, setShowForm }: showFormProps) => {

  const [formData, setFormData] = useState<string>('');
  const [vocabulary, setVocabulary] = useState<vocabulary[]>([]);
  const [isLoading , setIsLoading] = useState<boolean>(false)
  
  const URL = "vocabulary-hub-production.up.railway.app/api/vocabulary"
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     
    try {
      setIsLoading(true)
     const res = await axios.post(URL, {
      word: formData,
    });
    console.log(res.data?.vocabulary?.message);
    toast.success(res.data.message)
    getAllData();
    

    } catch (error) {
        if(axios.isAxiosError(error)){
          const backendMessage = error.response?.data || "Already have this word"
          toast.error(backendMessage.message);
        }
      
    } finally{
      setIsLoading(false)
      setShowForm(false)
      setFormData('')
    }
    
  };

  const getAllData = async () => {
    try {
      const res = await axios.get(URL);
      setVocabulary(res?.data?.vocabulary);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

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
            {vocabulary.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {formDate(item?.createdAt)}
                </td>
                <td className="border border-gray-300 px-4 py-2 font-bold uppercase">
                  {item?.englishWord}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {formatMeaning(item?.englishMeaning)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* This is the form section */}
      <form
        action=""
        onSubmit={handleSubmit}
        className={` w-[300px] h-[200px]  ${
          showForm
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        }  transition-all duration-500 delay-75 ease-in-out border-0 rounded-md shadow-2xl  absolute left-1/6 top-8 md:left-2/6 flex flex-col bg-amber-50 md:w-[500px] items-center justify-center md:h-[400px]`}
      >
        {
           isLoading ? 
            (           
                      
          <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div
              className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
            >
              <div
                className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
              ></div>
            </div>
          </div>

            ):( <>

        <FaWindowClose
          onClick={() => setShowForm(false)}
          className="absolute top-3 right-3 cursor-pointer transition duration-150 hover:scale-110"
        />
        <h2 className="mb-8  ">ഇന്നത്തെ പുതിയ വാക്ക് </h2>
        <span className='text-red-500 font-light font-serif text-[15px]'>“Please make sure the spelling is correct.”</span>
        <input
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
          type="text"
          className="px-2 border-2 border-blue-600 rounded-md outline-none w-60 h-7 md:h-11 md:w-80 font-semibold mb-4"
          required
        />
        <button
          type="submit"
          className="transition cursor-pointer duration-200 ease-in-out w-20 h-auto px-4 py-2 text-white bg-blue-800 border hover:scale-110 rounded-md"
        >
          Add
        </button>
        </>
      )}

      </form>
    </div>
  );
};

export default Tables;
