import './App.css';
import Axios from 'axios';
import { useState } from 'react';

function App() {
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");
    const [lyrics, setLyrics] = useState("");

    function searchLyrics() {
        if (artist === "" || song === "") {
          alert("Please enter the artist and song name");
            return;
        }
        Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => {
            console.log(res.data.lyrics);
            setLyrics(res.data.lyrics);
        })
        .catch(()=>{
          // alert("We didn't find the lyrics. Check artist and song names");
          setLyrics("Lyrics not found");

      });
    }

    return (
        <div className="App">
            <h1>Lyrics Finder ????</h1>

            <input className="inp" type="text" 
                placeholder='Artist name ex: BoB marley'
                onChange={(e) => { setArtist(e.target.value) }} />
            <input className="inp" type="text" 
                placeholder='Song name ex: Is This love'
                onChange={(e) => { setSong(e.target.value) }} />
            <button className="btn" 
                onClick={() => searchLyrics()}>
                    ???? Search</button>
            <hr />
            <pre>{lyrics}</pre>
        </div> ///npm
    );
}

export default App;