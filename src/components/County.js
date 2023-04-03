import {useState} from 'react'
import CountyLandmarks from './CountyLandmarks'
import data from '../json/Data.json';
import styles from './styles.css'

function County(){

    const [county, setCounty] = useState('')
    const [landmarks, setLandmarks] = useState([])

    

   
    return(
        <div className="countyDiv" id="container-1">
            
            <ul><button className="countyButtons" onClick={() => setCounty('Dublin')}>Dublin</button></ul>

            <ul><button className="countyButtons" onClick={() => setCounty('Clare')}>Clare</button></ul>
            <ul><button className="countyButtons" onClick={() => setCounty('Kerry') }>Kerry</button></ul>
            <ul><button className="countyButtons" onClick={() => setCounty('Antrim')}>Antrim</button></ul>
            <ul><button className="countyButtons" onClick={() => setCounty('Cork')}>Cork</button></ul>

            


            <ul>

            {
                data.map(function (i, index) {

                    if(i.county == county){
        
                    return(
                        <div key={index}>
                             <CountyLandmarks landmark_name={i.landmark_name} category={i.category} fact={i.fact} location={i.location} youtube={i.youtube}/>
                            
                        </div>
                    )
                    }
                })

            }

            </ul>
        
            
        </div>
    )

}

export default County;