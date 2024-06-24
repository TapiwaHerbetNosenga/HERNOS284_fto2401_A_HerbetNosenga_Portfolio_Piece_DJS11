import { useState, useEffect} from 'react'
import { Link, useSearchParams } from "react-router-dom"
 
const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');

  
 
  useEffect(() => {
    // Load your JSON data here. For demonstration, this is a static import.
    // In a real application, you might fetch this data from an API or local file.
    const loadData = async () => {
      // Assuming the JSON data is stored locally and accessible via an import or fetch call
      const response = await fetch('https://podcast-api.netlify.app');
      const data = await response.json();
      setPodcasts(data);
      setSortOrder('ascending');
      console.log(data.genres)
      
    };
 
    loadData();
   
    
  }, []);
 
  useEffect(() => {
    sortPodcasts();
  }, [sortOrder]);

 
 
  const sortPodcasts = () => {
    const sorted = [...podcasts].sort((a, b) => {
      if (sortOrder === 'ascending') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setPodcasts(sorted);
  };

  
  
 
  return (
<div>
<select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
<option value="ascending">Sort Ascending</option>
<option value="descending">Sort Descending</option>
</select>
<div  className='podcast-list'>
         {podcasts.map(podcast => (
       
          <div key={podcast.id} className="podcast-card">
           <Link to={`/shows/${podcast.id}`}>
            <img src={podcast.image} alt={podcast.title}  className='podcast-img'/>
            <h2 className='pod-title'>{podcast.title}</h2>
           </Link>
          </div>
         
        ))}
      </div>
</div>
  );
};
 
export default Podcasts;