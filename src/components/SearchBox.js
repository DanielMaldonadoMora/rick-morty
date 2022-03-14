import axios from 'axios';
import React, { useState } from 'react';

const SearchBox = ({setlocation}) => {

    const searchLocation=()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${search}`)
        .then(res=>setlocation(res.data))

    }

    const [search, setSearch] = useState('')
    return (
        <div>
            <input type="text"  onChange={e => setSearch(e.target.value)}  value={search}/>
            <button onClick={searchLocation}>Search</button>
        </div>
    );
};

export default SearchBox;