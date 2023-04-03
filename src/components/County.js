import {useState} from 'react'
import axios from 'axios'
import CountyLandmarks from './CountyLandmarks'
import data from '../json/data.json';
import styles from './styles.css'

function County(){

    const [county, setCounty] = useState('')
    const [landmarks, setLandmarks] = useState([])

    

   
    return(
        <div className="countyDiv" id="container-1">
            
            <ul><button className="countyButtons" onClick={() => setCity('Dublin')}>Dublin</button></ul>

            <ul><button className="countyButtons" onClick={() => setCity('Clare')}>Clare</button></ul>
            <ul><button className="countyButtons" onClick={() => setCity('Kerry') }>Kerry</button></ul>
            <ul><button className="countyButtons" onClick={() => setCity('Antrim')}>Antrim</button></ul>
            <ul><button className="countyButtons" onClick={() => setCity('Cork')}>Cork</button></ul>

            


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