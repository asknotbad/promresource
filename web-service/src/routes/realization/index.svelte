<script>
  import { onMount } from 'svelte';
  import RealizationHero from '$lib/RealizationHero/index.svelte';
  import RealizationCatalog from '$lib/RealizationCatalog/index.svelte';
  import RealizationText from '$lib/RealizationText/index.svelte';
  import Trust from '$lib/Trust/index.svelte';
  import OrderRequest from '$lib/OrderRequest/index.svelte';
  import Factory from '$lib/Factory/index.svelte';
  import Delivery from '$lib/Delivery/index.svelte';
  import Laboratory from '$lib/Laboratory/index.svelte';
  import GetSale from '$lib/GetSale/index.svelte';
  import Excellence from '$lib/Excellence/index.svelte';
  import RealizationCompany from '$lib/RealizationCompany/index.svelte';

  let realizationHeroData;
  let catalogData;
  let realizationCatalogData;
  let realizationTextData;
  let trustData;
  let orderRequestData;
  let factoryData;
  let deliveryData;
  let laboratoryData;
  let getSaleData;
  let excellenceData;
  let realizationCompanyData;

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

    const orderRequestDataRes = await fetch(`/api/order-request-data`);
		orderRequestData = await orderRequestDataRes.json();

    const factoryDataRes = await fetch(`/api/factory-data`);
		factoryData = await factoryDataRes.json();

    const deliveryDataRes = await fetch(`/api/delivery-data`);
		deliveryData = await deliveryDataRes.json();

    const laboratoryDataRes = await fetch(`/api/laboratory-data`);
		laboratoryData = await laboratoryDataRes.json();

    const getSaleDataRes = await fetch(`/api/get-sale-data`);
		getSaleData = await getSaleDataRes.json();

    const excellenceDataRes = await fetch(`/api/excellence-data`);
		excellenceData = await excellenceDataRes.json();

    const realizationCompanyDataRes = await fetch(`/api/realization-company-data`);
		realizationCompanyData = await realizationCompanyDataRes.json();
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

{#if orderRequestData}
  <OrderRequest bind:orderRequestData />
{/if}

{#if factoryData}
  <Factory bind:factoryData />
{/if}

{#if deliveryData}
  <Delivery bind:deliveryData />
{/if}

{#if laboratoryData}
  <Laboratory bind:laboratoryData />
{/if}

{#if getSaleData}
  <GetSale bind:getSaleData />
{/if}

{#if excellenceData}
  <Excellence bind:excellenceData />
{/if}

{#if realizationCompanyData}
  <RealizationCompany bind:realizationCompanyData />
{/if}
