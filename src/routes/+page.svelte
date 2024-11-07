<script>
	import * as config from '$lib/config';
	export let data;

	import { afterNavigate } from '$app/navigation';
	import PostsList from '../lib/components/PostsList.svelte';

	function scrollIntoView() {
		const el = document.getElementById('main');
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}

	afterNavigate(() => {
		scrollIntoView();
	});
</script>

<svelte:head>
	<title>{config.siteTitle}</title>
</svelte:head>

<PostsList {data} />
