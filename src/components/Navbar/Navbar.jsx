import React, { useState } from 'react'
import './Navbar.scss'
import { logo, kaplya } from '../../helpers/img'
import { useWeather } from '../../store/useWeather'

const Navbar = () => {

  const [searchValue, setSearchValue] = useState('')
  const { getCityName, toggleTheme } = useWeather()

  const getWeatherData = (event) => {
    if(event.key == 'Enter' && searchValue.length > 1) {
      getCityName(searchValue)
    }
  }

  return (
   <>
    <nav className="nav">
      <a href="#" className="logo">
        <img src={logo} alt="" />
        react weather
      </a>
      <div className="nav__search">
        <img src={kaplya} alt="" style={{cursor: 'pointer'}} onClick={() => toggleTheme()} />
        <input 
          placeholder="Выбрать город" 
          type="text" 
          className="nav__search-input"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyDown={(event) => getWeatherData(event)}
        />
      </div>
    </nav>
   </>
  )
}

export default Navbar