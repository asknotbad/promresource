<script>
  import { onMount } from 'svelte';
  import ContactsHero from '$lib/ContactsHero/index.svelte';
  import CompanyDetails from '$lib/CompanyDetails/index.svelte';
  import Employees from '$lib/Employees/index.svelte';
  import FabricAddress from '$lib/FabricAddress/index.svelte';

  let contactsHeroData;
  let companyDetailsData;
  let employeesData;
  let fabricAddressData;

  onMount(async () => {
		const contactsHeroDataRes = await fetch(`/api/contacts-hero-data`);
		contactsHeroData = await contactsHeroDataRes.json();

		const companyDetailsDataRes = await fetch(`/api/company-details-data`);
		companyDetailsData = await companyDetailsDataRes.json();

		const employeesDataRes = await fetch(`/api/employees-data`);
		employeesData = await employeesDataRes.json();

		const fabricAddressDataRes = await fetch(`/api/fabric-address-data`);
		fabricAddressData = await fabricAddressDataRes.json();
	});
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
