import React from 'react'
import UseFetch from './UseFetch.jsx'
import './FetchData.css'

const FetchData = () => {
  const [data]=UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
  console.log(data);
  return (
    <>
       <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
     <ul className='list_data_main'>
       
        
        {data && data.map((e,index) => (
            <>
            <li key={e.id || index} className='list_data'>
              <h3>{e.name}</h3>
              <p><strong>Importance: </strong>{e.importance}</p>
              <p><strong>Benefits:</strong> {e.benefits}</p>
              <p><strong>Best time to intake:</strong> {e.best_time_to_intake}</p>
             
              <img
                src={e.image}
                style={{ width: '150px' }}
                alt={e.name || 'description'}>
                </img>
             
            </li>
            </>
          ))}
        
     </ul>
    </>
  )
}

export default FetchData