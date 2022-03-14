import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Resident = ({resident}) => {
    const [residentInfo, setResidentInfo] = useState({})

    useEffect(() => {
        axios.get(resident)
        .then((res)=>setResidentInfo(res.data))
       }, [resident])
    const status= ()=>{
       if( residentInfo.status==='unknown'){
           return 'unknown'
       } else if(residentInfo.status==='Alive'){
           return 'alive'
       }else {
           return "dead"
       }
    }   
    return(
        <div className='card'>
        <img src={residentInfo.image} alt="" className='photo' />
        <ul className='info'>
            <li><h2>{residentInfo.name}</h2></li>
            <li> <div className={`status ${status ()}`}></div> {residentInfo.status}-{residentInfo.species}</li>
            <li>Origin: {residentInfo.origin?.name}</li>
            <li>Episodes where appear: {residentInfo.episode?.length}</li>
            
            
        </ul>
        
    </div>

    );
};

export default Resident;