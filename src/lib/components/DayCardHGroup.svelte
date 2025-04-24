<script>
	export let where = '';
	export let when = '';
	export let distance = '';

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
	const formattedDate = (date) => {
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
</script>

<hgroup>
	{#if where}
		<h5 class="where">{@html where}</h5>
	{/if}
	{#if when}
		<div class="when">{formattedDate(when)}</div>
	{/if}
	{#if distance}
		<div class="distance">({distance})</div>
	{/if}
</hgroup>

<style>
	hgroup {
		font-family: var(--font-humanist);
		/* margin-block-end: var(--size-6); */
	}
	h5.where {
		color: var(--header-text);
		display: inline;
		font-family: 'PostCardTitle', serif;
		font-size: var(--font-size-6);
		font-style: normal;
		letter-spacing: 0.15rem;
		margin-block: 0;
		padding-block: 0;
		text-shadow: 0.05rem 0.05rem 0.05rem black;
		width: 100%;
	}
	.when {
		/* color: var(--header-text-light); */
		font-size: var(--font-size-3);
		font-weight: bold;
		margin-block-start: var(--size-1);
	}
	.distance {
		/* color: var(--header-text-light); */
		font-family: 'italicText', serif;
		font-size: var(--font-size-2);
		/* font-style: italic; */
		margin-block: 0;
		padding-block: 0;
		/* font-weight: bold; */
	}
</style>
