import { FaCircleInfo } from "react-icons/fa6";

export default function Footer(props) {
  const {handleToggleModal,data}=props;
  return (
    <footer>
        <div className="bgGradient">

        </div>
        <div>
            <h1>Apod Project</h1>
            <h2>{data?.title}</h2>
        </div>
        <button onClick={handleToggleModal}>
        <FaCircleInfo />

        </button>
    </footer >
  )
}
