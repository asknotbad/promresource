<script context="module">
  export async function load({ page, fetch, session, context }) {
    let apiUrl;

    if (page.host !== undefined) {
      apiUrl = '/api';
    } else {
      apiUrl = `http://${session.env.API_HOST}:${session.env.API_PORT}`;
    };

		const realizationHeroDataRes = await fetch(`${apiUrl}/realization-hero-data`);
		const realizationHeroData = await realizationHeroDataRes.json();

    const catalogDataRes = await fetch(`${apiUrl}/catalog?type=sell&isActive=true&_sort=order:ASC`);
		const catalogData = await catalogDataRes.json();

    const realizationCatalogDataRes = await fetch(`${apiUrl}/realization-catalog-data`);
		const realizationCatalogData = await realizationCatalogDataRes.json();

    const realizationTextDataRes = await fetch(`${apiUrl}/realization-text-data`);
		const realizationTextData = await realizationTextDataRes.json();

    const trustDataRes = await fetch(`${apiUrl}/trust-data`);
		const trustData = await trustDataRes.json();

    const orderRequestDataRes = await fetch(`${apiUrl}/order-request-data`);
		const orderRequestData = await orderRequestDataRes.json();

    const factoryDataRes = await fetch(`${apiUrl}/factory-data`);
		const factoryData = await factoryDataRes.json();

    const deliveryDataRes = await fetch(`${apiUrl}/delivery-data`);
		const deliveryData = await deliveryDataRes.json();

    const laboratoryDataRes = await fetch(`${apiUrl}/laboratory-data`);
		const laboratoryData = await laboratoryDataRes.json();

    const getSaleDataRes = await fetch(`${apiUrl}/get-sale-data`);
		const getSaleData = await getSaleDataRes.json();

    const excellenceDataRes = await fetch(`${apiUrl}/excellence-data`);
		const excellenceData = await excellenceDataRes.json();

    const realizationCompanyDataRes = await fetch(`${apiUrl}/realization-company-data`);
		const realizationCompanyData = await realizationCompanyDataRes.json();

    const companyStatsDataRes = await fetch(`${apiUrl}/company-stats-data`);
		const companyStatsData = await companyStatsDataRes.json();

    const askQuetionDataRes = await fetch(`${apiUrl}/ask-quetion-data`);
		const askQuetionData = await askQuetionDataRes.json();

    return {
      props: {
        realizationHeroData,
        catalogData,
        realizationCatalogData,
        realizationTextData,
        trustData,
        orderRequestData,
        factoryData,
        deliveryData,
        laboratoryData,
        getSaleData,
        excellenceData,
        realizationCompanyData,
        companyStatsData,
        askQuetionData,
      }
    }
  };
</script>

<script>
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
  import CompanyStats from '$lib/CompanyStats/index.svelte';
  import AskQuetion from '$lib/AskQuetion/index.svelte';

  export let realizationHeroData;
  export let catalogData;
  export let realizationCatalogData;
  export let realizationTextData;
  export let trustData;
  export let orderRequestData;
  export let factoryData;
  export let deliveryData;
  export let laboratoryData;
  export let getSaleData;
  export let excellenceData;
  export let realizationCompanyData;
  export let companyStatsData;
  export let askQuetionData;
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

{#if companyStatsData}
  <CompanyStats bind:companyStatsData />
{/if}

{#if askQuetionData}
  <AskQuetion bind:askQuetionData />
{/if}
