<script>
  import { onMount } from 'svelte';
  import RealizationHero from '$lib/RealizationHero/index.svelte';

  let realizationHeroData;

  onMount(async () => {
		const realizationHeroDataRes = await fetch(`/api/realization-hero-data`);
		realizationHeroData = await realizationHeroDataRes.json();

	});
</script>

<svelte:head>
	<title>Промресурс | Продажа продукции</title>
</svelte:head>

{#if realizationHeroData}
  <RealizationHero bind:realizationHeroData />
{/if}
