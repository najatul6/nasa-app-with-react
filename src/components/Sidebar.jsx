import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="bgOverlay"></div>
        <div className="sidebarContents">
        <h2>Your home. Our Mission.</h2>
        <div>
            <p>description</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, exercitationem.</p>
        </div>
        <button>
        <FaRegArrowAltCircleRight />

        </button>
        </div>
    </div>
  )
}
