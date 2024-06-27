import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { FaEarthAmericas } from "react-icons/fa6";

function App() {
  const [data, setData] = useState(null)
  const [apiData, setApiData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchApiData() {
      const NASA_KEY = import.meta.env.VITE_NASA_KEY;
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }
      localStorage.clear()
      try {
        const res = await fetch(url);
        const data = await res.json();
        setApiData(data);
      } catch (err) {
        console.log(err.code, err.message);
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

App.propTypes = {
 
};

export default App;

