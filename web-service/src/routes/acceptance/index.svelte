<script context="module">
  export async function load({ page, fetch, session, context }) {
    let apiUrl;

    if (page.host !== undefined) {
      apiUrl = '/api';
    } else {
      apiUrl = `http://${session.env.API_HOST}:${session.env.API_PORT}`;
    };

		const acceptanceHeroDataRes = await fetch(`${apiUrl}/acceptance-hero-data`);
		const acceptanceHeroData = await acceptanceHeroDataRes.json();

    const catalogDataRes = await fetch(`${apiUrl}/catalog?type=buy&isActive=true&_sort=order:ASC&_limit=6`);
		const catalogData = await catalogDataRes.json();

    const acceptanceCatalogDataRes = await fetch(`${apiUrl}/acceptance-catalog-data`);
		const acceptanceCatalogData = await acceptanceCatalogDataRes.json();

    const acceptanceTextDataRes = await fetch(`${apiUrl}/acceptance-text-data`);
		const acceptanceTextData = await acceptanceTextDataRes.json();

    const certificatesDataRes = await fetch(`${apiUrl}/certificates-data`);
		const certificatesData = await certificatesDataRes.json();

    const sendPhotoDataRes = await fetch(`${apiUrl}/send-photo-data`);
		const sendPhotoData = await sendPhotoDataRes.json();

    const partnerTypesDataRes = await fetch(`${apiUrl}/partner-types-data`);
		const partnerTypesData = await partnerTypesDataRes.json();

    const philosophyVideoDataRes = await fetch(`${apiUrl}/philosophy-video-data`);
		const philosophyVideoData = await philosophyVideoDataRes.json();

    const faqDataRes = await fetch(`${apiUrl}/faq-data`);
		const faqData = await faqDataRes.json();

    const partnersReviewsDataRes = await fetch(`${apiUrl}/partners-reviews-data`);
		const partnersReviewsData = await partnersReviewsDataRes.json();

    const getPriceDataRes = await fetch(`${apiUrl}/get-price-data`);
		const getPriceData = await getPriceDataRes.json();

    return {
      props: {
        acceptanceHeroData,
        catalogData,
        acceptanceCatalogData,
        acceptanceTextData,
        certificatesData,
        sendPhotoData,
        partnerTypesData,
        philosophyVideoData,
        faqData,
        partnersReviewsData,
        getPriceData      },
    }
  };
</script>

<script>
  import AcceptanceHero from '$lib/AcceptanceHero/index.svelte';
  import AcceptanceCatalog from '$lib/AcceptanceCatalog/index.svelte';
  import AcceptanceText from '$lib/AcceptanceText/index.svelte';
  import Certificates from '$lib/Certificates/index.svelte';
  import SendPhoto from '$lib/SendPhoto/index.svelte';
  import PartnerTypes from '$lib/PartnerTypes/index.svelte';
  import PhilosophyVideo from '$lib/PhilosophyVideo/index.svelte';
  import Faq from '$lib/Faq/index.svelte';
  import PartnersReviews from '$lib/PartnersReviews/index.svelte';
  import GetPrice from '$lib/GetPrice/index.svelte';

  export let acceptanceHeroData;
  export let catalogData;
  export let acceptanceCatalogData;
  export let acceptanceTextData;
  export let certificatesData;
  export let sendPhotoData;
  export let partnerTypesData;
  export let philosophyVideoData;
  export let faqData;
  export let partnersReviewsData;
  export let getPriceData;
</script>

<svelte:head>
	<title>Промресурс | Приёмка лома</title>
</svelte:head>

{#if acceptanceHeroData}
  <AcceptanceHero bind:acceptanceHeroData />
{/if}

{#if catalogData && acceptanceCatalogData}
  <AcceptanceCatalog bind:acceptanceCatalogData bind:catalogData />
{/if}

{#if acceptanceTextData}
  <AcceptanceText bind:acceptanceTextData />
{/if}

{#if certificatesData}
  <Certificates bind:certificatesData />
{/if}

{#if sendPhotoData}
  <SendPhoto bind:sendPhotoData />
{/if}

{#if partnerTypesData}
  <PartnerTypes bind:partnerTypesData />
{/if}

{#if philosophyVideoData}
  <PhilosophyVideo bind:philosophyVideoData />
{/if}

{#if faqData}
  <Faq bind:faqData />
{/if}

{#if partnersReviewsData}
  <PartnersReviews bind:partnersReviewsData />
{/if}

{#if getPriceData}
  <GetPrice bind:getPriceData />
{/if}
