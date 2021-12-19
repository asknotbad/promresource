<script context="module">
  export async function load({ page, fetch, session, context }) {
    let apiUrl;

    if (page.host !== undefined) {
      apiUrl = '/api';
    } else {
      apiUrl = `http://${session.env.API_HOST}:${session.env.API_PORT}`;
    };

    const headerDataRes = await fetch(`${apiUrl}/header-data`);
    const headerData = await headerDataRes.json();

    const footerDataRes = await fetch(`${apiUrl}/footer-data`);
    const footerData = await footerDataRes.json();

    return {
      props: {
        headerData,
        footerData,
      }
    }
  };
</script>

<script>
  import Header from '$lib/Header/index.svelte';
  import Footer from '$lib/Footer/index.svelte';
	import Modals from '$lib/Modals/index.svelte';
	import '../app.css';

  export let headerData;
  export let footerData;
</script>

{#if headerData}
  <Header bind:headerData />
{/if}

<main>
	<slot />
</main>

{#if footerData}
  <Footer bind:footerData />
{/if}

<Modals />

<style>
  main {
    position: relative;
  }
</style>
