<script>
  import { onMount } from 'svelte';
  import ContactsHero from '$lib/ContactsHero/index.svelte';

  let contactsHeroData;

  onMount(async () => {
		const contactsHeroDataRes = await fetch(`/api/contacts-hero-data`);
		contactsHeroData = await contactsHeroDataRes.json();

	});
</script>

<svelte:head>
	<title>Промресурс | Контакты</title>
</svelte:head>

{#if contactsHeroData}
  <ContactsHero bind:contactsHeroData />
{/if}
