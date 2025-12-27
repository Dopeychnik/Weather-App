import { useEffect } from "react"
import Current from "./components/Current/Current"
import Navbar from "./components/Navbar/Navbar"
import { useWeather } from "./store/useWeather"
import Daily from "./components/Daily/Daily"

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
          : <h2>Идет загрузка...</h2>
        }
      </div>
    </>
  )
}

export default App
