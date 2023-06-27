import React, {useEffect, useState} from 'react';
import "./Media.css";
import { fetchPopularGiphys } from '../api/giphyApi';

const Media = () => {
const [popular, setPopular] = useState([]);

const randomizeData = (content) => {
  return content.data.sort(() => Math.random() - 0.5);
};

const getPopularGiphys = async () => { 
  const popular = await fetchPopularGiphys();
  setPopular(randomizeData(popular.data));
};

useEffect(() => {
  getPopularGiphys();
}, [])

console.log(popular, 'Sup');

  return (
    <div className="media">
    <div className="row">
      <div className="row-header">
        <img src="/images/Popular.png" alt="popular" />
        <h1>Popular</h1>
      </div>

      <div className="popular-container">
        {popular?.map((popularGiphy) => {
          return <h2>{popularGiphy.title}</h2>;
        })}
      </div>
      </div>

      <div className="row">
      <div className="row-header">
        <img src="/images/Artists.png" alt="artists" />
        <h1>Artists</h1>
      </div>

      <div className="artists-container">
        <p>CONTENT</p>
      </div>
      </div>

      <div className="row">
      <div className="row-header">
        <img src="/images/Stories.png" alt="stories" />
        <h1>Stories</h1>
      </div>

      <div className="stories-container">
        <p>CONTENT</p>
      </div>
      </div>

    </div>
  )
}

export default Media;