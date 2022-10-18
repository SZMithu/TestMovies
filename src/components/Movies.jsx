import React from 'react'
import { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Container } from './Navbar'
import NoImg from './NoImg.jpg'
import '../Styles/Movies.css'

import {AiFillPlayCircle} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import MovieTrailer from '../Trailers/MovieTrailer'

function Movies() {
  const {toggle, inputValue} = useContext(Container)
  const [moviesData, setMoviesData] = useState([])
  const [trailer, setTrailer] = useState(true)
  const [title, setTitle] = useState("")
  const Input = inputValue
  const Show = Input ? 'search' : 'discover' 
  const Api = `https://api.themoviedb.org/3/${Show}/movie`
  const Image = "https://image.tmdb.org/t/p/w500/"
  
  const MovieCall = async () => {
    const data = await axios.get(Api,{
      params: {
        api_key: 'bd30034654c2d0a2b28faa200fa0ac5a',
        query: inputValue,
      }
    })
    const results = data.data.results
    setMoviesData(results)    
  }
  useEffect(() => {
    setTimeout(()=>{
      MovieCall()
    }, 100)
    
  }, [Input])
  const movieTitle = (movie) => {
    setTitle(movie.title) 
    setTrailer(!trailer) 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <Fragment>
      <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
        <div className='movies-container'> 
        {moviesData.map((movie)=>{
          return (
            <Fragment key={movie.id}>
              <div id={trailer ?'container' : 'NoContainer'}>
                <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? 'playIcon' : 'hide' } onClick={()=>movieTitle(movie)}/>
                <img src={movie.poster_path ? `${Image}${movie.poster_path}` : NoImg} alt=""  onClick={()=>movieTitle(movie)} />
                <h3 className={toggle ? 'DarkTheme' : 'LightThemeClose'}>{movie.title}</h3>
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

export default Movies