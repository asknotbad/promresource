<script>
  import { onMount } from 'svelte';
  import RealizationHero from '$lib/RealizationHero/index.svelte';
  import RealizationCatalog from '$lib/RealizationCatalog/index.svelte';
  import RealizationText from '$lib/RealizationText/index.svelte';
  import Trust from '$lib/Trust/index.svelte';

  let realizationHeroData;
  let catalogData;
  let realizationCatalogData;
  let realizationTextData;
  let trustData;

  onMount(async () => {
		const realizationHeroDataRes = await fetch(`/api/realization-hero-data`);
		realizationHeroData = await realizationHeroDataRes.json();

    const catalogDataRes = await fetch(`/api/catalog?type=sell&isActive=true&_sort=order:ASC`);
		catalogData = await catalogDataRes.json();

    const realizationCatalogDataRes = await fetch(`/api/realization-catalog-data`);
		realizationCatalogData = await realizationCatalogDataRes.json();

    const realizationTextDataRes = await fetch(`/api/realization-text-data`);
		realizationTextData = await realizationTextDataRes.json();

    const trustDataRes = await fetch(`/api/trust-data`);
		trustData = await trustDataRes.json();
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

{#if realizationTextData}
  <RealizationText bind:realizationTextData />
{/if}

{#if trustData}
  <Trust bind:trustData />
{/if}
