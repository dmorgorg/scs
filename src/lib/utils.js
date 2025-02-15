/**
 * @param {number} number
 */
const nthNumber = (number) => {
	if (number > 3 && number < 21) return 'th';
	switch (number % 10) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
};

/**
 * @param {string | Date} date
 */
export const formattedDate = (date) => {
	const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const dateObj = new Date(date);
	const dayOfMonth = dateObj.getUTCDate();
	const dayOfWeek = weekdays[dateObj.getUTCDay()];
	const month = months[dateObj.getUTCMonth()];
	const year = dateObj.getUTCFullYear();

	return `${dayOfWeek} ${dayOfMonth}${nthNumber(dayOfMonth)} ${month}, ${year}`;
};
