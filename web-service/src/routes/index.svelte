<script>
  import { onMount } from 'svelte';
  import Hero from '$lib/Hero/index.svelte';
  import AboutCompany from '$lib/AboutCompany/index.svelte';
  import Advantages from '$lib/Advantages/index.svelte';

  let heroData;
  let aboutCompanyData;
  let advantagesData;

  onMount(async () => {
		const heroDataRes = await fetch(`/api/hero-data`);
		heroData = await heroDataRes.json();

		const aboutCompanyDataRes = await fetch(`/api/about-company-data`);
		aboutCompanyData = await aboutCompanyDataRes.json();

    const advantagesDataRes = await fetch(`/api/advantages-data`);
		advantagesData = await advantagesDataRes.json();
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
