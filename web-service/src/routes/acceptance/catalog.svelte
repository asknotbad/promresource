<script context="module">
  export async function load({ page, fetch, session, context }) {
    let apiUrl;

    if (page.host !== undefined) {
      apiUrl = '/api';
    } else {
      apiUrl = `http://${session.env.API_HOST}:${session.env.API_PORT}`;
    };

    const catalogDataRes = await fetch(`${apiUrl}/catalog?type=buy&isActive=true&_sort=order:ASC`);
		const catalogData = await catalogDataRes.json();

    const acceptanceCatalogTextDataRes = await fetch(`${apiUrl}/acceptance-catalog-text-data`);
		const acceptanceCatalogTextData = await acceptanceCatalogTextDataRes.json();

    return {
      props: {
        catalogData,
        acceptanceCatalogTextData,
      }
    }
  };
</script>

<script>
  import AcceptanceCatalogText from '$lib/AcceptanceCatalogText/index.svelte';
  import CatalogItems from '$lib/CatalogItems/index.svelte';

  export let catalogData;
  export let acceptanceCatalogTextData;
</script>

<svelte:head>
	<title>Промресурс | Приёмка лома</title>
</svelte:head>

{#if acceptanceCatalogTextData}
  <AcceptanceCatalogText bind:catalogData bind:acceptanceCatalogTextData />
{/if}

{#if catalogData}
  <CatalogItems bind:catalogData />
{/if}
