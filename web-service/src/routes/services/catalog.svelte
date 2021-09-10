<script>
  import { onMount } from 'svelte';
  import ServicesCatalogText from '$lib/ServicesCatalogText/index.svelte';
  import ServicesCatalogItems from '$lib/ServicesCatalogItems/index.svelte';

  let catalogData;
  let servicesCatalogTextData;

  onMount(async () => {
    const catalogDataRes = await fetch(`/api/catalog?type=service&isActive=true&_sort=order:ASC`);
		catalogData = await catalogDataRes.json();

    const servicesCatalogTextDataRes = await fetch(`/api/services-catalog-text-data`);
		servicesCatalogTextData = await servicesCatalogTextDataRes.json();
	});
</script>

<svelte:head>
	<title>Промресурс | Услуги</title>
</svelte:head>

{#if servicesCatalogTextData}
  <ServicesCatalogText bind:catalogData bind:servicesCatalogTextData />
{/if}

{#if catalogData}
  <ServicesCatalogItems bind:catalogData />
{/if}
