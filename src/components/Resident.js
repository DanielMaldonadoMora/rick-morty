import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Resident = ({resident}) => {
    const [residentInfo, setResidentInfo] = useState({})

    useEffect(() => {
        axios.get(resident)
        .then((res)=>setResidentInfo(res.data))
       }, [resident])
       
    return(
        <>
            <div>{residentInfo.name}</div>
        </>

    );
};

export default Resident;