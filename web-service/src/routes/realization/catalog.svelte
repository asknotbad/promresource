<script>
  import { onMount } from 'svelte';
  import RealizationCatalogText from '$lib/RealizationCatalogText/index.svelte';
  import CatalogItems from '$lib/CatalogItems/index.svelte';

  let catalogData;
  let realizationCatalogTextData;

  onMount(async () => {
    const catalogDataRes = await fetch(`/api/catalog?type=sell&isActive=true&_sort=order:ASC`);
		catalogData = await catalogDataRes.json();

    const realizationCatalogTextDataRes = await fetch(`/api/realization-catalog-text-data`);
		realizationCatalogTextData = await realizationCatalogTextDataRes.json();
	});
</script>

<svelte:head>
	<title>Промресурс | Приёмка лома</title>
</svelte:head>

{#if realizationCatalogTextData}
  <RealizationCatalogText bind:catalogData bind:realizationCatalogTextData />
{/if}

{#if catalogData}
  <CatalogItems bind:catalogData />
{/if}
