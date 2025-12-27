import React from 'react'
import './Current.scss'
import { useWeather } from '../../store/useWeather'
import { getTime } from '../../helpers/getTime'
import { weatherName } from '../../helpers/getIcon'
import { davlenie, headerBg, osadki, temp, wind } from '../../helpers/img'

const Current = () => {

  const { weatherData } = useWeather()
  const time = getTime(weatherData.timezone)
  const text = weatherData.current.weather[0].description
  const currentIcon = weatherName[text] ?? weatherName['пасмурно']

  const items = [
    {
      img: temp,
      text: `Температура`,
      value: `${Math.round(weatherData.current.temp)}° - ощущается как ${Math.round(weatherData.current.feels_like)}°`
    },
    {
      img: davlenie,
      text: `Давление `,
      value: `${weatherData.current.pressure} мм `
    },
    {
      img: osadki,
      text: `Осадки`,
      value: `${weatherData.current.clouds}%`
    },
    {
      img: wind,
      text: `Ветер`,
      value: `${weatherData.current.wind_speed} м/с `
    },
  ]

  return (
    <>
      <div className="current">
        <div className="current__left">
          <p className="current__left-degree">
            {Math.round(weatherData.current.temp)}°
          </p>
          <p className="current__left-day">Сегодня</p>
          <p className="current__left-time">
            Время: {time}
          </p>
          <p className="current__left-city">
            Город: {weatherData.timezone}
          </p>
          <img src={currentIcon} alt="" className="current__left-img" />
        </div>
        <div className="current__right">
          <img src={headerBg} alt="" className="current__right-img" />
          {items.map((item) => (
            <div className="current__right-item" key={item.text}>
              <div className="current__right-item-image">
                <img src={item.img} alt="" />
              </div>
              <p className="current__right-item-text">
                {item.text}
              </p>
              <p className="current__right-item-value">
                {item.value}
              </p>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default Current