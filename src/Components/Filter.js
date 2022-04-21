import React from 'react'
import "./Filter.css"

function Filter({ handleYear }) {

  let years = [];
  for (let i = 2006; i < 2021; i++) {
    years.push(i);
  }


  return (
    <div className='filter'>
      <h2>Filters</h2>
      <div className='year_tag'>
        <p className='tag'>Launch Year</p>
        <div className='buttons'>
          {years.map(year => {
            return <div className='button' onClick={() => handleYear(`${year}`)} key={year}  > {year} </div>
          })}
        </div>
      </div>
      <div className='launch_tag'>
        <p className='tag'>Successful Launch</p>
        <div className='buttons'>
          <div className='button' onClick={() => console.log(true)}  > True </div>
          <div className='button' onClick={() => console.log(false)} > False </div>
        </div>
      </div>
      <div className='landing_tag'>
        <p className='tag'>Successful Landing</p>
        <div className='buttons'>
          <div className='button' onClick={() => console.log(true)}  > True </div>
          <div className='button' onClick={() => console.log(false)} > False </div>
        </div>
      </div>
    </div>
  )
}

export default Filter