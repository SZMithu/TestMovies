import React from 'react'
import axios from 'axios'
import { Fragment, useEffect, useState, useContext } from 'react'
import {AiFillPlayCircle, AiOutlineClose} from 'react-icons/ai'
import NoImg from './NoImg.jpg'
import '../Styles/Movies.css'
import { Container } from './Navbar'
import MovieTrailer from '../Trailers/MovieTrailer'




function Tvshows() {
  const [showData, setShowData] = useState([])
  const [trailer, setTrailer] = useState(true)
  const [title, setTitle] = useState('')
  const {toggle, inputValue} = useContext(Container)
  const Input = inputValue
  const Show = Input ? 'search' : 'discover' 
  const Api = `https://api.themoviedb.org/3/${Show}/tv`
  const Images = 'https://image.tmdb.org/t/p/w500/'
 
  const CallTvShow = async () => {
   const data = await axios.get(Api,{
    params: {
         api_key : 'bd30034654c2d0a2b28faa200fa0ac5a',
         query : Input 
    }
   })
   const result = data.data.results
   setShowData(result)
  }
  useEffect(() => {
    CallTvShow()
  }, [Input])
  const tvShowTitle = (show) => {
    setTitle(show.name) 
    setTrailer(!trailer) 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    <Fragment>
      <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
        <div className='movies-container'>
      {showData.map((show)=>{
        return(
          <Fragment key={show.id}>
            <div id={trailer ?'container' : 'NoContainer'}>
              <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? 'playIcon' : 'hide' } onClick={()=>tvShowTitle(show)} />
              <img src={show.poster_path ? `${Images}${show.poster_path}` : NoImg} alt="" onClick={()=>tvShowTitle(show)} />
              <h3 className={toggle ? 'mainColor' : 'secondaryColor'}>{show.name}</h3>
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

export default Tvshows