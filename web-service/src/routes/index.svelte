<script context="module">
  export async function load({ page, fetch, session, context }) {
    let apiUrl;

    if (page.host !== undefined) {
      apiUrl = '/api';
    } else {
      apiUrl = `http://${session.env.API_HOST}:${session.env.API_PORT}`;
    };

    const heroDataRes = await fetch(`${apiUrl}/hero-data`);
		const heroData = await heroDataRes.json();

		const aboutCompanyDataRes = await fetch(`${apiUrl}/about-company-data`);
		const aboutCompanyData = await aboutCompanyDataRes.json();

    const advantagesDataRes = await fetch(`${apiUrl}/advantages-data`);
		const advantagesData = await advantagesDataRes.json();

    const partnershipDataRes = await fetch(`${apiUrl}/partnership-data`);
		const partnershipData = await partnershipDataRes.json();

    const organisationStructureDataRes = await fetch(`${apiUrl}/organisation-structure-data`);
		const organisationStructureData = await organisationStructureDataRes.json();

    const parthnersOfferDataRes = await fetch(`${apiUrl}/partners-offer-data`);
		const parthnersOfferData = await parthnersOfferDataRes.json();

    const newsRes = await fetch(`${apiUrl}/news?_sort=published_at:DESC&_limit=3`);
		const news = await newsRes.json();

    const newsListDataRes = await fetch(`${apiUrl}/news-list-data`);
		const newsListData = await newsListDataRes.json();

    return {
      props: {
        heroData,
        aboutCompanyData,
        advantagesData,
        partnershipData,
        organisationStructureData,
        parthnersOfferData,
        newsListData,
        news,
      }
    }
  };
</script>

<script>
  import Hero from '$lib/Hero/index.svelte';
  import AboutCompany from '$lib/AboutCompany/index.svelte';
  import Advantages from '$lib/Advantages/index.svelte';
  import Partnership from '$lib/Partnership/index.svelte';
  import OrganisationStructure from '$lib/OrganisationStructure/index.svelte';
  import ParthnersOffer from '$lib/ParthnersOffer/index.svelte';
  import NewsList from '$lib/NewsList/index.svelte';

  export let heroData;
  export let aboutCompanyData;
  export let advantagesData;
  export let partnershipData;
  export let organisationStructureData;
  export let parthnersOfferData;
  export let newsListData;
  export let news;
</script>

<svelte:head>
	<title>Промресурс | Главная</title>
</svelte:head>

{#if heroData}
  <Hero bind:heroData />
{/if}

{#if aboutCompanyData}
  <AboutCompany bind:aboutCompanyData />
{/if}

{#if advantagesData}
  <Advantages bind:advantagesData />
{/if}

{#if partnershipData}
  <Partnership bind:partnershipData />
{/if}

{#if organisationStructureData}
  <OrganisationStructure bind:organisationStructureData noPadding />
{/if}

{#if parthnersOfferData}
  <ParthnersOffer bind:parthnersOfferData />
{/if}

{#if newsListData && news}
  <NewsList bind:newsListData bind:news noPadding isLastOnPage />
{/if}
