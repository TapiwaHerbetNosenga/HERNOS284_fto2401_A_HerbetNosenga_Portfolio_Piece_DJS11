

import { useState, useEffect } from 'react';

import { Link, useParams, useLocation } from "react-router-dom"


  export default function Previews() {

  
      const { id } = useParams();
  

    const GENRE_TITLES = {
      1: 'Personal Growth',
      2: 'Investigative Journalism',
      3: 'History',
      4: 'Comedy',
      5: 'Entertainment',
      6: 'Business',
      7: 'Fiction',
      8: 'News',
      9: 'Kids and Family'
    };

    const [podcast, setPodcasts] = useState([null]);
  
    useEffect(() => {
      fetch(`https://podcast-api.netlify.app/id/${id}`)
        .then(response => response.json())
        .then(data => {
          setPodcasts(data); 
        })
        .catch(error => console.error(error));
    }, [id]); 
  
    if (!podcast) {
      return <div>Loading...</div>;
    }

    return (
      <div >
         
          <div key={podcast.id} className="podcast-card">
            <img src={podcast.image} alt={podcast.title} width="50vw" height="50vw"/>
            <h2>{podcast.title}</h2>
            <p>{podcast.description}</p>
            <p>Seasons: {podcast.seasons.length}</p>
            <p>Updated: {podcast.updated}</p>
            <p>Genres: {podcast.genres.map(genre => GENRE_TITLES[genre]).join(', ')}</p>
          </div>
        
      </div>
    );
  }