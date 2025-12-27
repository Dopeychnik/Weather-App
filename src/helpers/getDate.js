export function getDate(dt, word) {
    
    const data = new Date(dt * 1000)
    
    return word == 'weekday' ? data.toLocaleString('ru-RU', { weekday: 'short'}) :
           word == 'month'   ? data.toLocaleString('ru-RU', { month: 'short'})   :
           word == 'monthDay' ? data.toLocaleString('ru-RU', { day: 'numeric'})  : ''
    
}