import React from 'react'
import './Daily.scss'
import { sun } from '../../helpers/img'
import { useWeather } from '../../store/useWeather'
import { weatherName } from '../../helpers/getIcon'
import { getDate } from '../../helpers/getDate'

const Daily = () => {

    const { weatherData } = useWeather()


  return (
    <>
        <div className="daily">
            {weatherData.daily.map((day, i)=> (
                <div className="daily__item" key={day.dt}>
                    <p className="daily__item-day">
                        {i == 0 ? 'Сегодня' : i == 1 ? 'Завтра' : getDate(day.dt,'weekday')}
                    </p>
                    <p className="daily__item-month">
                        {getDate(day.dt,'monthDay')} 
                        {getDate(day.dt,'month')}
                    </p>
                    <img 
                        src={weatherName[day.weather[0].description] ?? weatherName['пасмурно']} 
                        alt="" 
                        className="daily__item-img" 
                    />
                    <p className="daily__item-temp">
                        Макс: {Math.round(day.temp.max)}°
                    </p>
                    <p className="daily__item-temp2">
                        Мин: {Math.round(day.temp.min)}°
                    </p>
                    <p className="daily__item-description">
                        {day.weather[0].description}
                    </p>
                </div>
            ))}
        </div>
    </>
  )
}

export default Daily