export function formatEdition(date) {
  const text = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
  return text.replace(/,(?=\s\d{4}$)/, '').toUpperCase()
}