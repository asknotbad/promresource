<script>
  import Header from '$lib/Header/index.svelte';
  import Footer from '$lib/Footer/index.svelte';
	import '../app.css';

  import { onMount } from 'svelte';

  let headerData;

  onMount(async () => {
		const res = await fetch(`/api/header-data`);
		headerData = await res.json();
	});
</script>

{#if headerData}
  <Header bind:headerData />
{/if}

<main>
	<slot />
</main>

<Footer />

<style>
  main {
    position: relative;
  }
</style>
