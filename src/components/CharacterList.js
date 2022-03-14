import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Resident from './Resident';

const CharacterList = ({location}) => {
    
    
    return (
        <div>
           {
                location?.residents?.map(resident=>(
                    <Resident resident={resident}
                              key={resident} 
                    />
                ))
            }
            
        </div>
    );
};

export default CharacterList;