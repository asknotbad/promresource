<script>
  import { onMount } from 'svelte';

  let vacanciesHeroData;

  onMount(async () => {
		const vacanciesHeroDataRes = await fetch(`/api/vacancies-hero-data`);
		vacanciesHeroData = await vacanciesHeroDataRes.json();

	});
</script>

<svelte:head>
	<title>Промресурс | Вакансии</title>
</svelte:head>
