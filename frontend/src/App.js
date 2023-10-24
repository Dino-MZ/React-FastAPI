import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  // FastAPI endpoint deployed on localhost
  const API_ENDPOINT = 'http://127.0.0.1:8000/'
  const [documentData, setDocumentData] = useState([]);

  // API Call
  const getDocument = async () => {
    try {
      const response = await axios.get(API_ENDPOINT);
      console.log(response.data)
      setDocumentData(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getDocument()
  }, [])

  return (
    <div className="App">
      <pre>
        <code>
         {JSON.stringify(documentData, null, 2)}
        </code>
      </pre>
    </div>
  );
}

export default App;
