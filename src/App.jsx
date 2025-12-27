import { useEffect } from "react"
import Current from "./components/Current/Current"
import Navbar from "./components/Navbar/Navbar"
import { useWeather } from "./store/useWeather"
import Daily from "./components/Daily/Daily"
import Loader from "./components/Loader/Loader"

function App() {

  const { getCityName, weatherData, theme, initTheme } = useWeather()

  useEffect(() => {
    getCityName('Ташкент')
    initTheme()
  }, [])

  return (
    <>
      <div className={`app ${theme}`}>
        {weatherData ?
          <div className="container">
            <Navbar />
            <Current />
            <Daily />
          </div>
          : <Loader/>
        }
      </div>
    </>
  )
}

export default App
