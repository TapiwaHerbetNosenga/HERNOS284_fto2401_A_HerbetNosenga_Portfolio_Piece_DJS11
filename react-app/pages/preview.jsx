import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


  export default function Previews() {

    const [podcasts, setPodcasts] = useState([]);
   
  
    useEffect(() => {
      fetch('https://podcast-api.netlify.app')
        .then(response => response.json())
        .then(data => {
          setPodcasts(data); 
        })
        .catch(error => console.error(error));
    }, []); 
  
    return (
       
      <div  className='podcast-list'>
         {podcasts.map(podcast => (
          <Link key={podcast.id} to={`/shows/${podcast.id}`}>
          <div key={podcast.id} className="podcast-card">
            <img src={podcast.image} alt={podcast.title} />
            <h2>{podcast.title}</h2>
          </div>
          </Link>
        ))}
      </div>
     
    );
  }