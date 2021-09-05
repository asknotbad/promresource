<script>
  import { onMount } from 'svelte';
  import VacanciesHero from '$lib/VacanciesHero/index.svelte';

  let vacanciesHeroData;

  onMount(async () => {
		const vacanciesHeroDataRes = await fetch(`/api/vacancies-hero-data`);
		vacanciesHeroData = await vacanciesHeroDataRes.json();

	});
</script>

<svelte:head>
	<title>Промресурс | Вакансии</title>
</svelte:head>

{#if vacanciesHeroData}
  <VacanciesHero bind:vacanciesHeroData />
{/if}
