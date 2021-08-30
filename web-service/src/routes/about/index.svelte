<script>
  import { onMount } from 'svelte';
  import AboutUsText from '$lib/AboutUsText/index.svelte';
  import CompanyStructure from '$lib/CompanyStructure/index.svelte';
  import Philosophy from '$lib/Philosophy/index.svelte';
  import CompanyHistory from '$lib/CompanyHistory/index.svelte';
  import FuturePlans from '$lib/FuturePlans/index.svelte';
  import Contacts from '$lib/Contacts/index.svelte';

  let aboutUsTextData;
  let companyStructureData;
  let philosophyData;
  let companyHistoryData;
  let futurePlansData;
  let contactsData;

  onMount(async () => {
		const aboutUsTextDataRes = await fetch(`/api/about-us-text-data`);
		aboutUsTextData = await aboutUsTextDataRes.json();

    const companyStructureDataRes = await fetch(`/api/company-structure-data`);
		companyStructureData = await companyStructureDataRes.json();

    const philosophyDataRes = await fetch(`/api/philosophy-data`);
		philosophyData = await philosophyDataRes.json();

    const companyHistoryDataRes = await fetch(`/api/company-history-data`);
		companyHistoryData = await companyHistoryDataRes.json();

    const futurePlansDataRes = await fetch(`/api/future-plans-data`);
		futurePlansData = await futurePlansDataRes.json();

    const contactsDataRes = await fetch(`/api/contacts-data`);
		contactsData = await contactsDataRes.json();
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

{#if companyHistoryData}
  <CompanyHistory bind:companyHistoryData />
{/if}

{#if futurePlansData}
  <FuturePlans bind:futurePlansData />
{/if}

{#if contactsData}
  <Contacts bind:contactsData />
{/if}
