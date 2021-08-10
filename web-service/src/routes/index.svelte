<script>
  import { onMount } from 'svelte';

  let heroData;

  onMount(async () => {
		const heroDataRes = await fetch(`/api/hero-data`);
		heroData = await heroDataRes.json();

	});

</script>

<svelte:head>
	<title>Промресурс | Главная</title>
</svelte:head>


