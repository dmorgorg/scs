/**
 * @param {number} number
 */
const nthNumber = (number) => {
	if (number > 3 && number < 21) return 'th'
	switch (number % 10) {
		case 1:
			return 'st'
		case 2:
			return 'nd'
		case 3:
			return 'rd'
		default:
			return 'th'
	}
}

/**
 * @param {string | Date} date
 */
export const formattedDate = (date) => {
	const dateObj = new Date(date)
	const dayOfMonth = dateObj.getDate()
	// const dayOfWeek = dateObj.getDay()
	const dayOfWeek = dateObj.toLocaleString('default', { weekday: 'long' })
	const month = dateObj.toLocaleString('default', { month: 'long' })
	const year = dateObj.getFullYear()

	return `${dayOfWeek} ${dayOfMonth}${nthNumber(dayOfMonth)} ${month}, ${year}`
}
