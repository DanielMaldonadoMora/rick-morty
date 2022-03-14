import React from 'react';

const LocationInfo = ({location}) => {
    return (
        <div className='location_info'>
            <h1>{location?.name}</h1>
            <ul>
                <li>Type: {location?.type}</li>
                <li>Dimension: {location?.dimension}</li>
                <li>Population: {location?.residents?.length}</li>
            </ul>
        </div>
    );
};

export default LocationInfo;