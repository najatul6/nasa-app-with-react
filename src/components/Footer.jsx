import { FaCircleInfo } from "react-icons/fa6";

export default function Footer(props) {
  const {handleToggleModal,data}=props;
  return (
    <footer>
        <div className="bgGradient">

        </div>
        <div>
            <h2>{data?.title}</h2>
            <h1>{data?.subTitle}</h1>
        </div>
        <button onClick={handleToggleModal}>
        <FaCircleInfo />

        </button>
    </footer >
  )
}
