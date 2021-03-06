
import React from 'react';
import Resident from './Resident';

const CharacterList = ({location}) => {
    
    
    return (
        <div className='residentsList'>
           {
                location?.residents?.map(resident=>(
                    <Resident  resident={resident}
                              key={resident} 
                    />
                ))
            }
            
        </div>
    );
};

export default CharacterList;