<script>
	export let where = ''
	export let when = ''
	export let distance = ''

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
		color: var(--header-text-dark);
		display: inline;
		font-family: inherit;
		font-size: var(--font-size-5);
		font-style: normal;
		margin-block: 0;
		padding-block: 0;
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
		font-family: Alkes;
		font-size: var(--font-size-2);
		font-style: italic;
		margin-block: 0;
		padding-block: 0;
		font-weight: bold;
	}
</style>
