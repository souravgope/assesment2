import axios from "axios";
import { useState } from "react";
import CatCard from "./Components/CatCard";
import CatTable from './Components/CatTable';

function App() {
  const [catData, setCatData] = useState(null);
  const [view, setView] = useState('table');

  // Fetching the image of the cat
  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.thecatapi.com/v1/images/search?has_breeds=1");
      console.log('API Response:', response.data);
      setCatData(response.data[0]);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  // Fetching the details of the cat 
  const fetchDetails = async (id) => {
    try {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/${id}`);
      setCatData(response.data);
    } catch (error) {
      console.error("Error fetching cat details", error);
    }
  };

  return (
    <div>
      <h1 className="text-center font-semibold text-black p-4 text-3xl bg-slate-500">
        Cat Management Application
      </h1>

      <div className="flex justify-center">
        <div className="flex items-center justify-center p-3">
          <button onClick={fetchData} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 border border-black-700 rounded p-5">
            Fetch Image
          </button>
        </div>

        <div className="flex items-center justify-center p-3">
          <button onClick={() => setView('table')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 border border-black-700 rounded p-5">
            Table View
          </button>
        </div>

        <div className="flex items-center justify-center p-3">
          <button onClick={() => setView('card')} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-3 border border-black-700 rounded p-5">
            Card View
          </button>
        </div>
      </div>

      <div className="flex justify-center p-5">
        {catData ? (
          <>
            {view === 'table' && <CatTable catData={catData} />}
            {view === 'card' && <CatCard catData={catData} />}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;

