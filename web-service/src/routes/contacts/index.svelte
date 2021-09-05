<script>
  import { onMount } from 'svelte';
  import ContactsHero from '$lib/ContactsHero/index.svelte';
  import CompanyDetails from '$lib/CompanyDetails/index.svelte';

  let contactsHeroData;
  let companyDetailsData;

  onMount(async () => {
		const contactsHeroDataRes = await fetch(`/api/contacts-hero-data`);
		contactsHeroData = await contactsHeroDataRes.json();

		const companyDetailsDataRes = await fetch(`/api/company-details-data`);
		companyDetailsData = await companyDetailsDataRes.json();

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
