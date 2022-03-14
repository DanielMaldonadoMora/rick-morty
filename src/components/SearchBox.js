import axios from 'axios';
import React, { useState } from 'react';

const SearchBox = ({setlocation}) => {

    const searchLocation=()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${search}`)
        .then(res=>setlocation(res.data))

    }

    const [search, setSearch] = useState('')
    return (
        <div className='search_box'>
            <input type="text" className='input_search' onChange={e => setSearch(e.target.value)}  value={search}/>
            <button className='search_buton' onClick={searchLocation}>Search</button>
        </div>
    );
};

export default SearchBox;