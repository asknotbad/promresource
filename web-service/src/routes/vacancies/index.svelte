<script>
  import { onMount } from 'svelte';
  import VacanciesHero from '$lib/VacanciesHero/index.svelte';
  import VacanciesCare from '$lib/VacanciesCare/index.svelte';

  let vacanciesHeroData;
  let vacanciesCareData;

  onMount(async () => {
		const vacanciesHeroDataRes = await fetch(`/api/vacancies-hero-data`);
		vacanciesHeroData = await vacanciesHeroDataRes.json();

		const vacanciesCareDataRes = await fetch(`/api/vacancies-care-data`);
		vacanciesCareData = await vacanciesCareDataRes.json();

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
