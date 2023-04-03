import {useState} from 'react'
import styles from './styles.css'
import images from './images.json';


function CountyLandmarks(props) {

    const [details, setDetails] = useState(false)

    function handleShowMore(){

        setDetails(true)

    }

    function handleShowLess(){

        setDetails(false)
    }


    if(details){
        return(
            <div className="container-4">
                <div className="landmarkName">
                    <h1>{props.landmark_name}</h1>
                    <button className="lessButton" onClick={handleShowLess}> Show Less</button>

                </div>
                <div className="detailsDiv" id="container-3">
                    <ul>
                        <ol>
                            <h2>Catagory:</h2>
                            {props.category}
                        </ol>
                        <ol>   
                            <h2>Fact:</h2>
                            {props.fact}
                        </ol>
                        <ol>
                            <h2>Location:</h2>
                            <p>{props.location}</p>
                            
                        </ol>
                        <ol>
                            <h2>Image:</h2>
                            {
                                images.map(function (j, imageIndex) {

                                    if(j.name == props.landmark_name){
        
                                    return(
                                        <div>
                                        <img className="iconImage" src={j.icon} />
                                        
                                        </div>
            
                                    )
                                    }
                                }) 
                            }
                        </ol>
                        <ol>
                            <h2>Youtube:</h2>
                            <div className="video-responsive">
                        <iframe
                        width="500"
                        height="280"
                        src={`https://www.youtube.com/embed/${props.youtube}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        />
                    </div> 
                            
                        </ol>
                    </ul>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="container-4">
                <div className="landmarkName">
                <h1>{props.landmark_name}</h1>
                <button className="moreButton" onClick={handleShowMore}> Show More</button>
                </div>
            </div>
        )
    }


}

export default CountyLandmarks;