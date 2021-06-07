import React from 'react';
import {useState, useEffect} from 'react';
import {LoadImages, SearchImages} from './components/api'
import Image from './components/image'
import './App.css';

function App() {
    const [query, setQuery] = useState()
    const [searchQ, setSearch] = useState()

    const data = LoadImages();
    
    const search = () => {
      setSearch(query)
    } 

    const searchData = SearchImages(searchQ);

        return (
          <div className="App">
            
            <div className="searchbar">
              <h1>FLICKR SEARCH</h1>
              <input type="text" onChange={(e) => setQuery(e.target.value)}/>
              <button onClick={search}>Search</button>
            </div>

            <div className = "contain">
              {searchQ ? searchData.map((image, key) => (
                  <Image url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} key={key} alt={image.title} />
                )) : data.map((image, key) => (
                  <Image url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} key={key} alt={image.title} />
              ))}

            </div>
           </div>
        );
}

export default App;

//https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
