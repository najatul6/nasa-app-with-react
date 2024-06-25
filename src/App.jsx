import { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"


function App() {
  const [showModal, setShowModal] =useState(false)
  function handleToggleModal (){
    setShowModal(!showModal)
  }
  return (
    <>
     <Main/>
    {showModal && <Sidebar handleToggleModal={handleToggleModal}/>}
     <Footer handleToggleModal={handleToggleModal}/>
    </>
  )
}

export default App
