export default function Main(props){
    const{data}=props
    console.log(data);
    return (
        <div className="imgContainer">
            <img src={data.hdurl} alt={data.title || 'bg-img'} className="bgImage" />
            <video src={data.url} controls></video>
            {/* <iframe src={data?.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;"></iframe> */}
        </div>
    )
}