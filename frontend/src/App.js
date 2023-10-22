import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  const msg = async () => {
    try {
      let response = await axios.get('http://127.0.0.1:8000/');
      let result = response.data
      console.log(result)
      setData(result)
    }
    catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    msg()
  }, [])

  return (
    <div className="App">
      <pre>
        <code>
         {JSON.stringify(data, null, 2)}
        </code>
      </pre>
    </div>
  );
}

export default App;
