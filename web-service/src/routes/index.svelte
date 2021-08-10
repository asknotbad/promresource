<script>
  import { onMount } from 'svelte';
  import Hero from '$lib/Hero/index.svelte';
  import AboutCompany from '$lib/AboutCompany/index.svelte';

  let heroData;
  let aboutCompanyData;

  onMount(async () => {
		const heroDataRes = await fetch(`/api/hero-data`);
		heroData = await heroDataRes.json();

		const aboutCompanyDataRes = await fetch(`/api/about-company-data`);
		aboutCompanyData = await aboutCompanyDataRes.json();
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
