import { FaCircleInfo } from "react-icons/fa6";

export default function Footer(props) {
  const {handleToggleModal}=props;
  return (
    <footer>
        <div className="bgGradient">

        </div>
        <div>
            <h2>Your home. Our Mission.</h2>
            <h1>NASA PROJECT</h1>
        </div>
        <button onClick={handleToggleModal}>
        <FaCircleInfo />

        </button>
    </footer >
  )
}
