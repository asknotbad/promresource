<script context="module">
  export async function load({ page, fetch, session, context }) {
    let apiUrl;

    if (page.host !== undefined) {
      apiUrl = '/api';
    } else {
      apiUrl = `http://${session.env.API_HOST}:${session.env.API_PORT}`;
    };

    const catalogDataRes = await fetch(`${apiUrl}/catalog?type=sell&isActive=true&_sort=order:ASC`);
		const catalogData = await catalogDataRes.json();

    const realizationCatalogTextDataRes = await fetch(`${apiUrl}/realization-catalog-text-data`);
		const realizationCatalogTextData = await realizationCatalogTextDataRes.json();

    return {
      props: {
        catalogData,
        realizationCatalogTextData,
      }
    }
  };
</script>

<script>
  import RealizationCatalogText from '$lib/RealizationCatalogText/index.svelte';
  import CatalogItems from '$lib/CatalogItems/index.svelte';

  export let catalogData;
  export let realizationCatalogTextData;
</script>

<svelte:head>
	<title>Промресурс | Продажа готовой продукции</title>
</svelte:head>

{#if realizationCatalogTextData}
  <RealizationCatalogText bind:catalogData bind:realizationCatalogTextData />
{/if}

{#if catalogData}
  <CatalogItems bind:catalogData />
{/if}
