<script context="module">
  export async function load({ page, fetch, session, context }) {
    let apiUrl;

    if (page.host !== undefined) {
      apiUrl = '/api';
    } else {
      apiUrl = `http://${session.env.API_HOST}:${session.env.API_PORT}`;
    };

		const vacanciesHeroDataRes = await fetch(`${apiUrl}/vacancies-hero-data`);
		const vacanciesHeroData = await vacanciesHeroDataRes.json();

		const vacanciesCareDataRes = await fetch(`${apiUrl}/vacancies-care-data`);
		const vacanciesCareData = await vacanciesCareDataRes.json();

		const vacanciesPhotosDataRes = await fetch(`${apiUrl}/vacancies-photos-data`);
		const vacanciesPhotosData = await vacanciesPhotosDataRes.json();

		const organizationOfWorkDataRes = await fetch(`${apiUrl}/organization-of-work-data`);
		const organizationOfWorkData = await organizationOfWorkDataRes.json();

    const vacanciesDataRes = await fetch(`${apiUrl}/vacancies-data`);
		const vacanciesData = await vacanciesDataRes.json();

    const vacanciesSubscribeDataRes = await fetch(`${apiUrl}/vacancies-subscribe-data`);
		const vacanciesSubscribeData = await vacanciesSubscribeDataRes.json();

    return {
      props: {
        vacanciesHeroData,
        vacanciesCareData,
        vacanciesPhotosData,
        organizationOfWorkData,
        vacanciesData,
        vacanciesSubscribeData,
      }
    }
  };
</script>

<script>
  import VacanciesHero from '$lib/VacanciesHero/index.svelte';
  import VacanciesCare from '$lib/VacanciesCare/index.svelte';
  import VacanciesPhotos from '$lib/VacanciesPhotos/index.svelte';
  import OrganizationOfWork from '$lib/OrganizationOfWork/index.svelte';
  import Vacancies from '$lib/Vacancies/index.svelte';
  import VacanciesSubscribe from '$lib/VacanciesSubscribe/index.svelte';

  export let vacanciesHeroData;
  export let vacanciesCareData;
  export let vacanciesPhotosData;
  export let organizationOfWorkData;
  export let vacanciesData;
  export let vacanciesSubscribeData;
</script>

<svelte:head>
	<title>Промресурс | Вакансии</title>
</svelte:head>

{#if vacanciesHeroData}
  <VacanciesHero bind:vacanciesHeroData />
{/if}

{#if vacanciesCareData}
  <VacanciesCare bind:vacanciesCareData />
{/if}

{#if vacanciesPhotosData}
  <VacanciesPhotos bind:vacanciesPhotosData />
{/if}

{#if organizationOfWorkData}
  <OrganizationOfWork bind:organizationOfWorkData />
{/if}

{#if vacanciesData}
  <Vacancies bind:vacanciesData />
{/if}

{#if vacanciesSubscribeData}
  <VacanciesSubscribe bind:vacanciesSubscribeData />
{/if}
