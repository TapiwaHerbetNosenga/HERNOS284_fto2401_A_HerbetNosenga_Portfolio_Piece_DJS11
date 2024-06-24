
import { useState, useEffect } from 'react';

export default function Test() {
const [data, setData] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = () => {
    fetch("https://podcast-api.netlify.app/seasons")
      .then(response => {
        if (!response.ok) {
          throw new Error('Data fetching failed');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  fetchData();

}, []);



return (
  <div>
    {error && <h1>Error: {error}</h1>}
    {data.length > 0 && (
      <div>
        <p>{data.shows[0].seasons[1].episodes[1]}
        {data[2].title}</p>
      </div>
    )}
  </div>
)
}
/*
import React, { useState, useEffect } from 'react';

export default function Test() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://podcast-api.netlify.app") // Replace with the actual API endpoint
        .then(response => {
          if (!response.ok) {
            throw new Error('Data fetching failed');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
        })
        .catch(error => {
          setError(error.message);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <h1>Error: {error}</h1>}
      {data.length > 0 && (
        <div>
          <p>{data[0].id}</p>
          {/* Render other data properties as needed }
        </div>
      )}
    </div>
  );
}*/
