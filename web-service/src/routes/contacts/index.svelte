<script context="module">
  export async function load({ page, fetch, session, context }) {
    let apiUrl;

    if (page.host !== undefined) {
      apiUrl = '/api';
    } else {
      apiUrl = `http://${session.env.API_HOST}:${session.env.API_PORT}`;
    };

		const contactsHeroDataRes = await fetch(`${apiUrl}/contacts-hero-data`);
		const contactsHeroData = await contactsHeroDataRes.json();

		const companyDetailsDataRes = await fetch(`${apiUrl}/company-details-data`);
		const companyDetailsData = await companyDetailsDataRes.json();

		const employeesDataRes = await fetch(`${apiUrl}/employees-data`);
		const employeesData = await employeesDataRes.json();

		const fabricAddressDataRes = await fetch(`${apiUrl}/fabric-address-data`);
		const fabricAddressData = await fabricAddressDataRes.json();

    return {
      props: {
        contactsHeroData,
        companyDetailsData,
        employeesData,
        fabricAddressData,
      }
    }
  };
</script>

<script>
  import ContactsHero from '$lib/ContactsHero/index.svelte';
  import CompanyDetails from '$lib/CompanyDetails/index.svelte';
  import Employees from '$lib/Employees/index.svelte';
  import FabricAddress from '$lib/FabricAddress/index.svelte';

  export let contactsHeroData;
  export let companyDetailsData;
  export let employeesData;
  export let fabricAddressData;
</script>

<svelte:head>
	<title>Промресурс | Контакты</title>
</svelte:head>

{#if contactsHeroData}
  <ContactsHero bind:contactsHeroData />
{/if}

{#if companyDetailsData}
  <CompanyDetails bind:companyDetailsData />
{/if}

{#if employeesData}
  <Employees bind:employeesData />
{/if}

{#if fabricAddressData}
  <FabricAddress bind:fabricAddressData />
{/if}
