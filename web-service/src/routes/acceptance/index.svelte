<script>
  import { onMount } from 'svelte';
  import AcceptanceHero from '$lib/AcceptanceHero/index.svelte';
  import AcceptanceCatalog from '$lib/AcceptanceCatalog/index.svelte';
  import AcceptanceText from '$lib/AcceptanceText/index.svelte';
  import Certificates from '$lib/Certificates/index.svelte';

  let acceptanceHeroData;
  let catalogData;
  let acceptanceCatalogData;
  let acceptanceTextData;
  let certificatesData;

  onMount(async () => {
		const acceptanceHeroDataRes = await fetch(`/api/acceptance-hero-data`);
		acceptanceHeroData = await acceptanceHeroDataRes.json();

    const catalogDataRes = await fetch(`/api/catalog?type=buy&isActive=true&_sort=order:ASC&_limit=6`);
		catalogData = await catalogDataRes.json();

    const acceptanceCatalogDataRes = await fetch(`/api/acceptance-catalog-data`);
		acceptanceCatalogData = await acceptanceCatalogDataRes.json();

    const acceptanceTextDataRes = await fetch(`/api/acceptance-text-data`);
		acceptanceTextData = await acceptanceTextDataRes.json();

    const certificatesDataRes = await fetch(`/api/certificates-data`);
		certificatesData = await certificatesDataRes.json();
	});

</script>

<svelte:head>
	<title>Промресурс | Приёмка лома</title>
</svelte:head>

{#if acceptanceHeroData}
  <AcceptanceHero bind:acceptanceHeroData />
{/if}

{#if catalogData && acceptanceCatalogData}
  <AcceptanceCatalog bind:acceptanceCatalogData bind:catalogData />
{/if}

{#if acceptanceTextData}
  <AcceptanceText bind:acceptanceTextData />
{/if}

{#if certificatesData}
  <Certificates bind:certificatesData />
{/if}
