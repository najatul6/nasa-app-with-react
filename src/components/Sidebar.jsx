import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Sidebar(props) {
  const {handleToggleModal,data}=props;
  return (
    <div className="sidebar">
        <div onClick={handleToggleModal} className="bgOverlay"></div>
        <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div>
            <p className="descriptionTitle">Description : </p>
            <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
        <FaRegArrowAltCircleRight />

        </button>
        </div>
    </div>
  )
}
