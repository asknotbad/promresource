<script>
  import { onMount } from 'svelte';
  import AboutUsText from '$lib/AboutUsText/index.svelte';
  import CompanyStructure from '$lib/CompanyStructure/index.svelte';
  import Philosophy from '$lib/Philosophy/index.svelte';

  let aboutUsTextData;
  let companyStructureData;
  let philosophyData;

  onMount(async () => {
		const aboutUsTextDataRes = await fetch(`/api/about-us-text-data`);
		aboutUsTextData = await aboutUsTextDataRes.json();

    const companyStructureDataRes = await fetch(`/api/company-structure-data`);
		companyStructureData = await companyStructureDataRes.json();

    const philosophyDataRes = await fetch(`/api/philosophy-data`);
		philosophyData = await philosophyDataRes.json();
	});

</script>

<svelte:head>
	<title>Промресурс | О нас</title>
</svelte:head>

{#if aboutUsTextData}
  <AboutUsText bind:aboutUsTextData />
{/if}

{#if companyStructureData}
  <CompanyStructure bind:companyStructureData />
{/if}

{#if philosophyData}
  <Philosophy bind:philosophyData noPadding />
{/if}
