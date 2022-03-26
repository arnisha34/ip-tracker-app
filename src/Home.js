import React, { useState } from 'react';
import Search from './Search';
import Map from './Map';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IPContext } from './Context'

function Home() {

  const [search, setSearch] = useState('');
  const [results, setResults] = useState({});


  return (
    <IPContext.Provider value={{ search, setSearch, results, setResults}}>
      <header className="container-fluid header-container">
        <div className='container'>
          <div className="row text-center header align-items-center">
            <div className="col">
              <h3 className="title">IP Address Tracker</h3>
              <Search />
            </div>
          </div>
        </div>
      </header>
      <main className="container-fluid main-container">
        <div className="row">
          <div className="col">
            <Map />
          </div>
        </div>
      </main>
    </IPContext.Provider>
  );
}

export default Home;
