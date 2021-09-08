<script>
  import { onMount } from 'svelte';
  import Header from '$lib/Header/index.svelte';
  import Footer from '$lib/Footer/index.svelte';
	import Modals from '$lib/Modals/index.svelte';
	import '../app.css';

  let headerData;
  let footerData;

  onMount(async () => {
		const headerDataRes = await fetch(`/api/header-data`);
		headerData = await headerDataRes.json();

    const footerDataRes = await fetch(`/api/footer-data`);
		footerData = await footerDataRes.json();
	});
</script>

{#if headerData}
  <Header bind:headerData />
{/if}

<main>
	<slot />
</main>

{#if footerData}
  <Footer bind:footerData />
{/if}

<Modals />

<style>
  main {
    position: relative;
  }
</style>
