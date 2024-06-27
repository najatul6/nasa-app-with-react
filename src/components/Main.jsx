import defaultBg from '/Moon.webp' 
export default function Main(props){
    const{data}=props

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