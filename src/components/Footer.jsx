import PropTypes from "prop-types";
import { FaCircleInfo } from "react-icons/fa6";

export default function Footer(props) {
  const {handleToggleModal,data}=props;
  return (
    <footer>
        <div className="bgGradient">

        </div>
        <div>
            <h1>APOD Project</h1>
            <h2>{data?.title}</h2>
        </div>
        <button onClick={handleToggleModal}>
        <FaCircleInfo />

        </button>
        <p>Created By - <a href="https://najatul-islam.vercel.app/" target="_blank">Najatul Islam</a></p>
    </footer >
  )
}

Footer.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

