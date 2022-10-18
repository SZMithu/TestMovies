import axios from 'axios'
import React, { Fragment, useState, useEffect, useContext } from 'react'
import {AiFillPlayCircle, AiOutlineClose  } from 'react-icons/ai'
import { Container } from './Navbar'
import NoImg from './NoImg.jpg'
import MovieTrailer from '../Trailers/MovieTrailer'

function Trends() {
 const {toggle, inputValue} = useContext(Container) 
 const [trendsData, setTrendsData] = useState([])
 const [title, setTitle] = useState('')
 const [trailer, setTrailer] = useState(true)
 const Input = inputValue
 const Show = Input ? 'search' : 'all' 

 const Api = `https://api.themoviedb.org/3/trending/${Show}/day`
 const Image = "https://image.tmdb.org/t/p/w500/"
 const Trands = async () => {
  const data = await axios.get(Api, {
    params: {
      api_key : 'bd30034654c2d0a2b28faa200fa0ac5a',
    }
  })
  const results = data.data.results
  setTrendsData(results)
}
useEffect(() => {
  setTimeout(()=>{
    Trands()
  }, 100)
}, [Input])
const trendingTitle = (trend) => {
  setTitle(trend.title) 
  setTrailer(!trailer) 
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
  return (
    <Fragment>
    <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
      <div className='movies-container'> 
      {trendsData.map((trend)=>{
        return (
          <Fragment key={trend.id}>
            <div id={trailer ?'container' : 'NoContainer'}>
              <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? 'playIcon' : 'hide' }onClick={()=>trendingTitle(trend)}/>
              <img src={trend.poster_path ? `${Image}${trend.poster_path}` : NoImg} alt=""  onClick={()=>trendingTitle(trend)} />
              <h3 className={toggle ? 'DarkTheme' : 'LightThemeClose'}>{trend.title}</h3>
            </div>
          </Fragment>
        )
      })}
      {trailer ? console.log() : <MovieTrailer movieTitle={title} toggle={toggle} />}
      <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} cursor={'pointer'} onClick={()=> setTrailer(true)} />
      </div>
    </div>     
  </Fragment>
  )
}

export default Trends