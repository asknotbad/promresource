<script>
  import { onMount } from 'svelte';
  import AboutUsText from '$lib/AboutUsText/index.svelte';

  let aboutUsTextData;

  onMount(async () => {
		const aboutUsTextDataRes = await fetch(`/api/about-us-text-data`);
		aboutUsTextData = await aboutUsTextDataRes.json();
	});

</script>

<svelte:head>
	<title>Промресурс | О нас</title>
</svelte:head>

{#if aboutUsTextData}
  <AboutUsText bind:aboutUsTextData />
{/if}
