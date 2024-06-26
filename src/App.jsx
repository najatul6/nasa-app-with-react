import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { FaEarthAmericas } from "react-icons/fa6";

function App() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchApiData() {
      const NASA_KEY = import.meta.env.VITE_NASA_KEY;
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
      try {
        const res = await fetch(url);
        const data = await res.json();
        setApiData(data);
        console.log(apiData);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchApiData();
  }, []);
  return (
    <>
      {apiData ? (
        <Main data={apiData}/>
      ) : (
        <div className="loadingState">
          <FaEarthAmericas className="spin_logo" />
        </div>
      )}
      {showModal && (
        <Sidebar data={apiData} handleToggleModal={handleToggleModal} />
      )}
      {apiData && (
        <Footer data={apiData} handleToggleModal={handleToggleModal} />
      )}
    </>
  );
}

export default App;
