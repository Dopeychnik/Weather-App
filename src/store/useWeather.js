import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY

export const useWeather = create(devtools((set,get) => ({
    weatherData: null,
    theme: 'light',
    toggleTheme: () => {
        let currentTheme = get().theme == 'light' ? 'dark' : 'light'
        set({theme : currentTheme})
        localStorage.setItem('theme', currentTheme)
    },
    initTheme: () => {
        let getTheme = localStorage.getItem('theme')
        if( getTheme) {
            set({ theme: getTheme})
        }
    },
    getCityName:  async (city) => {
        let { data } = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
        get().getData(data[0])
    },
    getData: async(param) => {
        if(param) {
            let { data } = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${param.lat}&lon=${param.lon}&exclude=alerts,hourly,minutely&appid=${apiKey}&units=metric&lang=ru`)
            set({ weatherData: data })
        }else {
            alert('Такого города нет')
        }

    }
})))

