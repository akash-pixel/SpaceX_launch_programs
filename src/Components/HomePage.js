import React,{useEffect, useState} from 'react';
import Card from './Card';
import Filter from './Filter';

function HomePage() {

    const baseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100'
    
    const [year, setYear] = useState('');
    // const [successfulLaunch, setSuccessfulLaunch] = true;
    // const [landed, setLanded] = true;

    const [launches, setLaunch] = useState([]);

    function handleYear( y ){
        setYear(y)
    }

    useEffect(() => {
        async function fetchData() {

            let url = baseUrl+(year && `&launch_year=${year}`)

            console.log(url);
            const request = await fetch(url)
                .then( res => res.json() )
                setLaunch(request);   
                return request;
          }
          fetchData();
    }, [year])
    

  return (
      <div className='main' style={{"display":"flex"}}>
          <Filter handleYear={handleYear} />
        <div className='Cards'>
            {launches.map(launch =>{
                return <Card launch={launch} key={launch.flight_number} />
            })}
        </div>
    </div>
  )
}

export default HomePage