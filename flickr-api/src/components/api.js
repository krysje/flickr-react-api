import {useState, useEffect} from 'react';
import axios from "axios";

const count = 1;
function LoadImages(){
    const [state, setState] = useState([])
    useEffect(() => {
        axios
        .get("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=2fae4e1a497aad661bad0c608ac2baf1&safe_search=2&format=json&nojsoncallback=1")
        .then((data) => {
            setState(data.data.photos.photo)
        })
    }, [count])
     
    return state;
}

function SearchImages(query){
    const [state, setState] = useState([])
    useEffect(() => {
        axios
        .get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2fae4e1a497aad661bad0c608ac2baf1&text="+query+"&safe_search=2&format=json&nojsoncallback=1")
        .then((data) => {
            setState(data.data.photos.photo)
        })
    }, [query])
     
    return state;
}

export {LoadImages, SearchImages} 