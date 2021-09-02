<script>
  import { onMount } from 'svelte';
  import RealizationHero from '$lib/RealizationHero/index.svelte';
  import RealizationCatalog from '$lib/RealizationCatalog/index.svelte';

  let realizationHeroData;
  let catalogData;
  let realizationCatalogData;

  onMount(async () => {
		const realizationHeroDataRes = await fetch(`/api/realization-hero-data`);
		realizationHeroData = await realizationHeroDataRes.json();

    const catalogDataRes = await fetch(`/api/catalog?type=sell&isActive=true&_sort=order:ASC`);
		catalogData = await catalogDataRes.json();

    const realizationCatalogDataRes = await fetch(`/api/realization-catalog-data`);
		realizationCatalogData = await realizationCatalogDataRes.json();
	});
</script>

<svelte:head>
	<title>Промресурс | Продажа продукции</title>
</svelte:head>

{#if realizationHeroData}
  <RealizationHero bind:realizationHeroData />
{/if}

{#if realizationCatalogData}
  <RealizationCatalog bind:realizationCatalogData bind:catalogData />
{/if}
