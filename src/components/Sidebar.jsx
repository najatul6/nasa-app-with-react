import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Sidebar(props) {
  const {handleToggleModal}=props;
  return (
    <div className="sidebar">
        <div onClick={handleToggleModal} className="bgOverlay"></div>
        <div className="sidebarContents">
        <h2>Your home. Our Mission.</h2>
        <div>
            <p>description</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, exercitationem.</p>
        </div>
        <button onClick={handleToggleModal}>
        <FaRegArrowAltCircleRight />

        </button>
        </div>
    </div>
  )
}
