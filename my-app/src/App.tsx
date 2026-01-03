import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './components/Button'
import Tables, { type VocabularyItem } from './components/Tables'
import AmazingLoader from './components/loader'

const App = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [vocabulary, setVocabulary] = useState<VocabularyItem[]>([])

  const URL = "https://vocabulary-hub.onrender.com/api/vocabulary"

  const getAllData = async () => {
    try {
      setLoading(true)
      const res = await axios.get(URL);
      setVocabulary(res?.data?.vocabulary);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getAllData();
  }, [])

  return (
    <div>
      {loading ? <AmazingLoader /> : (
        <>
          <Button setShowForm={setShowForm} />
          <Tables
            showForm={showForm}
            setShowForm={setShowForm}
            vocabulary={vocabulary}
            refreshData={getAllData}
          />
        </>
      )}
    </div>
  )
}

export default App
