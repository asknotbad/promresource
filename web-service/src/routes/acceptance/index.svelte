<script>
  import { onMount } from 'svelte';
  import AcceptanceHero from '$lib/AcceptanceHero/index.svelte';

  let acceptanceHeroData;

  onMount(async () => {
		const acceptanceHeroDataRes = await fetch(`/api/acceptance-hero-data`);
		acceptanceHeroData = await acceptanceHeroDataRes.json();
	});

</script>

<svelte:head>
	<title>Промресурс | Приёмка лома</title>
</svelte:head>

{#if acceptanceHeroData}
  <AcceptanceHero bind:acceptanceHeroData />
{/if}
