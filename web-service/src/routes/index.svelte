<script>
  import { onMount } from 'svelte';
  import Hero from '$lib/Hero/index.svelte';

  let heroData;

  onMount(async () => {
		const heroDataRes = await fetch(`/api/hero-data`);
		heroData = await heroDataRes.json();

	});

</script>

<svelte:head>
	<title>Промресурс | Главная</title>
</svelte:head>

{#if heroData}
  <Hero bind:heroData />
{/if}
