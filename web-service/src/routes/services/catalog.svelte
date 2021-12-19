<script context="module">
  export async function load({ page, fetch, session, context }) {
    let apiUrl;

    if (page.host !== undefined) {
      apiUrl = '/api';
    } else {
      apiUrl = `http://${session.env.API_HOST}:${session.env.API_PORT}`;
    };

    const catalogDataRes = await fetch(`${apiUrl}/catalog?type=service&isActive=true&_sort=order:ASC`);
		const catalogData = await catalogDataRes.json();

    const servicesCatalogTextDataRes = await fetch(`${apiUrl}/services-catalog-text-data`);
		const servicesCatalogTextData = await servicesCatalogTextDataRes.json();

    return {
      props: {
        catalogData,
        servicesCatalogTextData,
      }
    }
  };
</script>

<script>
  import ServicesCatalogText from '$lib/ServicesCatalogText/index.svelte';
  import ServicesCatalogItems from '$lib/ServicesCatalogItems/index.svelte';

  export let catalogData;
  export let servicesCatalogTextData;
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
