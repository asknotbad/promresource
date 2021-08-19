<script>
  import { onMount } from 'svelte';
  import Hero from '$lib/Hero/index.svelte';
  import AboutCompany from '$lib/AboutCompany/index.svelte';
  import Advantages from '$lib/Advantages/index.svelte';
  import Partnership from '$lib/Partnership/index.svelte';
  import OrganisationStructure from '$lib/OrganisationStructure/index.svelte';
  import ParthnersOffer from '$lib/ParthnersOffer/index.svelte';
  import NewsList from '$lib/NewsList/index.svelte';


  let heroData;
  let aboutCompanyData;
  let advantagesData;
  let partnershipData;
  let organisationStructureData;
  let parthnersOfferData;
  let newsListData;
  let news;

  onMount(async () => {
		const heroDataRes = await fetch(`/api/hero-data`);
		heroData = await heroDataRes.json();

		const aboutCompanyDataRes = await fetch(`/api/about-company-data`);
		aboutCompanyData = await aboutCompanyDataRes.json();

    const advantagesDataRes = await fetch(`/api/advantages-data`);
		advantagesData = await advantagesDataRes.json();

    const partnershipDataRes = await fetch(`/api/partnership-data`);
		partnershipData = await partnershipDataRes.json();

    const organisationStructureDataRes = await fetch(`/api/organisation-structure-data`);
		organisationStructureData = await organisationStructureDataRes.json();

    const parthnersOfferDataRes = await fetch(`/api/partners-offer-data`);
		parthnersOfferData = await parthnersOfferDataRes.json();

    const newsRes = await fetch(`/api/news?_sort=published_at:DESC&_limit=3`);
		news = await newsRes.json();

    const newsListDataRes = await fetch(`/api/news-list-data`);
		newsListData = await newsListDataRes.json();
	});

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
