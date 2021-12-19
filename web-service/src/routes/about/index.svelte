<script context="module">
  export async function load({ page, fetch, session, context }) {
    let apiUrl;

    if (page.host !== undefined) {
      apiUrl = '/api';
    } else {
      apiUrl = `http://${session.env.API_HOST}:${session.env.API_PORT}`;
    };

    const aboutUsTextDataRes = await fetch(`${apiUrl}/about-us-text-data`);
		const aboutUsTextData = await aboutUsTextDataRes.json();

    const companyStructureDataRes = await fetch(`${apiUrl}/company-structure-data`);
		const companyStructureData = await companyStructureDataRes.json();

    const philosophyDataRes = await fetch(`${apiUrl}/philosophy-data`);
		const philosophyData = await philosophyDataRes.json();

    const companyHistoryDataRes = await fetch(`${apiUrl}/company-history-data`);
		const companyHistoryData = await companyHistoryDataRes.json();

    const futurePlansDataRes = await fetch(`${apiUrl}/future-plans-data`);
		const futurePlansData = await futurePlansDataRes.json();

    const contactsDataRes = await fetch(`${apiUrl}/contacts-data`);
		const contactsData = await contactsDataRes.json();

    return {
      props: {
        aboutUsTextData,
        companyStructureData,
        philosophyData,
        companyHistoryData,
        futurePlansData,
        contactsData      },
    }
  };
</script>

<script>
  import AboutUsText from '$lib/AboutUsText/index.svelte';
  import CompanyStructure from '$lib/CompanyStructure/index.svelte';
  import Philosophy from '$lib/Philosophy/index.svelte';
  import CompanyHistory from '$lib/CompanyHistory/index.svelte';
  import FuturePlans from '$lib/FuturePlans/index.svelte';
  import Contacts from '$lib/Contacts/index.svelte';

  export let aboutUsTextData;
  export let companyStructureData;
  export let philosophyData;
  export let companyHistoryData;
  export let futurePlansData;
  export let contactsData;
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
