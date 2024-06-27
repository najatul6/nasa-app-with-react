import PropTypes from 'prop-types';
import defaultBg from '/Moon.webp' 
export default function Main({data}){

    return (
        <div className="imgContainer">
            
            <img
                src={data?.url || `${defaultBg}`}
                alt={data?.title || 'background-img'}
                className="bgImage"
            />
        </div>
    )
}

Main.propTypes={
    data: PropTypes.object,  // expecting an object with properties like url and title

}