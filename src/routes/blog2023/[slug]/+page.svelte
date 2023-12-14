<!-- src/routes/[slug]/+page.svelte -->
<script>
  export let data
  const { date, title, Content } = data
</script>

<article>
  <h1>{title}</h1>
  <p>Published: {date}</p>
  <!-- <svelte:component this={Content} /> -->
  <Content />
</article>
