import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import SearchBox from './components/SearchBox';
import logo from './assets/RyM3.png';

function App() {
  const [location, setlocation] = useState({})

  useEffect(() => {
    const random=Math.floor(Math.random()*126)
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
         .then(res=> setlocation(res.data))
        }, [])
        
        console.log(location)
  return (
    
    <div className="App"> 
      <div className='container'>
        <img src={logo} alt="Logo" className='logo' />
      </div>
      <SearchBox setlocation={setlocation} />
      <h1>{location.name}</h1>
     <CharacterList location={location}/>
    </div>
  );
}

export default App;
