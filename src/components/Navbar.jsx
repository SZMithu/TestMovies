import React, { Fragment, useState, createContext } from 'react'
import {HiSearch} from 'react-icons/hi'
import { Routes, Route, NavLink } from 'react-router-dom'
import '../Styles/NavbarStyles.css'
import Movies from './Movies'
import Pricing from './Pricing'
import Trends from './Trends'
import Tvshows from './Tvshows'

export const Container = React.createContext()
function Navbar() {
    const [toggle, setToggle] = useState(true)
    const [inputValue, setInputValue] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
  return (
    <Container.Provider value={{toggle, inputValue}}>
    <Fragment>
        <nav id={toggle ? '' : 'navBarColor'}>
        <div className="nav-options">
            <NavLink to=''>
            <h1 id={toggle ? '/TestMovies' : 'heading'}>TESTMOVIES</h1>
            </NavLink>
            <NavLink to="/Movies" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9800'}}}>
            <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
            </NavLink>
            <NavLink to='/TvShows' style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9800'}}}>
            <span id={toggle ? 'Movies' : 'MoviesLight'}>Tv Shows</span>
            </NavLink>
            <NavLink to='/Trending' style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9800'}}}>
            <span id={toggle ? 'Movies' : 'MoviesLight'}>Trending</span>
            </NavLink>
            <NavLink to='/Pricing' style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9800'}}}>
            <span id={toggle ? 'Movies' : 'MoviesLight'}>Pricing</span>
            </NavLink>
        </div>
        <div className='input-group'>
          <input type="text" placeholder='Search' onChange={(e)=>setInputValue(e.target.value)} />
          <HiSearch fontSize={21} id="search"/>
          <div id="Color-switcher" onClick={()=>setToggle(!toggle)}>
              <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
          </div>
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
          </div>
        </div>
        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <NavLink to="/Movies" onClick={() => setMobileMenuOpen(false)}>Movies</NavLink>
            <NavLink to="/TvShows" onClick={() => setMobileMenuOpen(false)}>Tv Shows</NavLink>
            <NavLink to="/Trending" onClick={() => setMobileMenuOpen(false)}>Trending</NavLink>
            <NavLink to="/Pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</NavLink>
        </div>
        </nav>
       <Routes>
        <Route path='/' element={<Movies />}/>
        <Route path='TestMovies' element={<Movies />}/>
        <Route path='Movies' element={<Movies />}/>
        <Route path='TvShows' element={<Tvshows />}/>
        <Route path='Trending' element={<Trends />}/>
        <Route path='Pricing' element={<Pricing />}/>
       </Routes>
    </Fragment>
    </Container.Provider>
  )
}

export default Navbar
