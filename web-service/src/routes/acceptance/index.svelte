<script>
  import { onMount } from 'svelte';
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

  let acceptanceHeroData;
  let catalogData;
  let acceptanceCatalogData;
  let acceptanceTextData;
  let certificatesData;
  let sendPhotoData;
  let partnerTypesData;
  let philosophyVideoData;
  let faqData;
  let partnersReviewsData;
  let getPriceData;

  onMount(async () => {
		const acceptanceHeroDataRes = await fetch(`/api/acceptance-hero-data`);
		acceptanceHeroData = await acceptanceHeroDataRes.json();

    const catalogDataRes = await fetch(`/api/catalog?type=buy&isActive=true&_sort=order:ASC&_limit=6`);
		catalogData = await catalogDataRes.json();

    const acceptanceCatalogDataRes = await fetch(`/api/acceptance-catalog-data`);
		acceptanceCatalogData = await acceptanceCatalogDataRes.json();

    const acceptanceTextDataRes = await fetch(`/api/acceptance-text-data`);
		acceptanceTextData = await acceptanceTextDataRes.json();

    const certificatesDataRes = await fetch(`/api/certificates-data`);
		certificatesData = await certificatesDataRes.json();

    const sendPhotoDataRes = await fetch(`/api/send-photo-data`);
		sendPhotoData = await sendPhotoDataRes.json();

    const partnerTypesDataRes = await fetch(`/api/partner-types-data`);
		partnerTypesData = await partnerTypesDataRes.json();

    const philosophyVideoDataRes = await fetch(`/api/philosophy-video-data`);
		philosophyVideoData = await philosophyVideoDataRes.json();

    const faqDataRes = await fetch(`/api/faq-data`);
		faqData = await faqDataRes.json();

    const partnersReviewsDataRes = await fetch(`/api/partners-reviews-data`);
		partnersReviewsData = await partnersReviewsDataRes.json();

    const getPriceDataRes = await fetch(`/api/get-price-data`);
		getPriceData = await getPriceDataRes.json();
	});

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

