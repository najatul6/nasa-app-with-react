import PropTypes from "prop-types";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Sidebar(props) {
  const {handleToggleModal,data}=props;
  return (
    <div className="sidebar">
        <div onClick={handleToggleModal} className="bgOverlay"></div>
        <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <p className="opacity-50">{data?.date}</p>
        <div className="descriptionContainer">
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

Sidebar.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}
