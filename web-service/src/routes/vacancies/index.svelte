<script>
  import { onMount } from 'svelte';
  import VacanciesHero from '$lib/VacanciesHero/index.svelte';
  import VacanciesCare from '$lib/VacanciesCare/index.svelte';
  import VacanciesPhotos from '$lib/VacanciesPhotos/index.svelte';
  import OrganizationOfWork from '$lib/OrganizationOfWork/index.svelte';
  import Vacancies from '$lib/Vacancies/index.svelte';

  let vacanciesHeroData;
  let vacanciesCareData;
  let vacanciesPhotosData;
  let organizationOfWorkData;
  let vacanciesData;

  onMount(async () => {
		const vacanciesHeroDataRes = await fetch(`/api/vacancies-hero-data`);
		vacanciesHeroData = await vacanciesHeroDataRes.json();

		const vacanciesCareDataRes = await fetch(`/api/vacancies-care-data`);
		vacanciesCareData = await vacanciesCareDataRes.json();

		const vacanciesPhotosDataRes = await fetch(`/api/vacancies-photos-data`);
		vacanciesPhotosData = await vacanciesPhotosDataRes.json();

		const organizationOfWorkDataRes = await fetch(`/api/organization-of-work-data`);
		organizationOfWorkData = await organizationOfWorkDataRes.json();

    const vacanciesDataRes = await fetch(`/api/vacancies-data`);
		vacanciesData = await vacanciesDataRes.json();

	});
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
