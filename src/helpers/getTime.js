export function getTime(timezone) {
    return new Date().toLocaleTimeString('ru-RU', {
        timeZone: timezone,
        timeStyle: 'short'
    })
}