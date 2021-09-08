<script>
  import { onMount } from 'svelte';
  import AcceptanceCatalogText from '$lib/AcceptanceCatalogText/index.svelte';

  let catalogData;
  let acceptanceCatalogTextData;

  onMount(async () => {
    const catalogDataRes = await fetch(`/api/catalog?type=buy&isActive=true&_sort=order:ASC`);
		catalogData = await catalogDataRes.json();

    const acceptanceCatalogTextDataRes = await fetch(`/api/acceptance-catalog-text-data`);
		acceptanceCatalogTextData = await acceptanceCatalogTextDataRes.json();
	});

</script>

<svelte:head>
	<title>Промресурс | Приёмка лома</title>
</svelte:head>

{#if catalogData && acceptanceCatalogTextData}
  <AcceptanceCatalogText bind:catalogData bind:acceptanceCatalogTextData />
{/if}
