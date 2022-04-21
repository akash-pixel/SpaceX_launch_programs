import React from 'react'
import "./Card.css"

function Card( {launch} ) {
  return (
    <div key={launch.flight_number} className="Card">
        <img className='rocket-logo' src={launch.links.mission_patch} alt={launch.mission_name} />
        <div className='details' >
            <h3>{launch.mission_name}</h3>
            
            <div className='detail' >
                <h5>Mission Ids:</h5> 
                {launch.mission_id}
            </div>
            <div className='detail'>
                <h5>Launch Year: </h5> 
                {launch.launch_year}
            </div>
            <div className='detail'>
                <h5>Successful Launch:</h5> {launch.success}
            </div>
            <div className='detail'>
                <h5>Successful Landing:</h5> {launch.launch_landing}
            </div>
        </div>
    </div>
  )
}

export default Card