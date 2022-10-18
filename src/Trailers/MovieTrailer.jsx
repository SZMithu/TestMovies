import React, { Fragment, useState, useEffect } from 'react'
import ReactPlayer from 'react-player';
import '../Styles/Trailermovies.css'
import axios from 'axios';

const MovieTrailer = ({movieTitle, toggle}) => {
    const [video, setVideo] = useState(movieTitle);
    const [videoURL, setVideoURL] =
	useState("");
  const Api = 'https://www.googleapis.com/youtube/v3/search'
  const Key = 'AIzaSyA3bFnk1lIngggGIBdNfqWN6wslMyU7Qs0'

  const handleSearch = async () => {
    const data = await axios.get(Api,{
      params: {
        part:'snippet',
        key: Key,
        q: video,
        type: 'video',
        relevanceLanguage : 'en'
      }
    })
    const videoId = data.data.items[0].id.videoId
    const url = `https://www.youtube.com/watch?v=${videoId}`
    setVideoURL(url)       
  }
  
useEffect(() => {
  handleSearch()
}, [])

  return (
    <Fragment>
    <div className='container'>
    </div>
        <div className='player'>
          <h1 id={toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light'}>{movieTitle}</h1>
          <ReactPlayer url={videoURL} controls={true} width={'50vw'} height={'75vh'} />
        </div>
   
    </Fragment>
  )
}

export default MovieTrailer

