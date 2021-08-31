<script>
  import Button from '$lib/Button/index.svelte';
  import Carousel from './Carousel.svelte';
  import ItemCard from './ItemCard.svelte';
  import './tiny-slider.css';

  export let catalogData;
  export let acceptanceCatalogData;

  let innerWidth = null;
  let isCarousel = false
  let items = 6;

  $: items = (() => {
    if (innerWidth >= 1200) {
      isCarousel = false;
      return  5;
    } else if (innerWidth < 1200 && innerWidth >= 992) {
      isCarousel = false;
      return  4;
    } else if (innerWidth < 992 && innerWidth >= 768) {
      isCarousel = false;
      return  6;
    } else if (innerWidth < 768 && innerWidth >= 576) {
      isCarousel = false;
      return  4;
    } else if (innerWidth < 576) {
      isCarousel = true;
      return 6;
    };
    return 1;
  })();

</script>

<svelte:window bind:innerWidth />

{#if catalogData && acceptanceCatalogData}
  <section class="acceptance-catalog">
    <div class="container">
      <h2>
        {acceptanceCatalogData.header}
      </h2>
      <div class="content">
        {@html acceptanceCatalogData.content}
      </div>
      {#if isCarousel === true && catalogData.length > 0}
        <Carousel bind:items={catalogData} />
      {:else}
        <div class="list">
          {#each catalogData as item, i}
            {#if i < items}
              <ItemCard bind:item />
            {/if}
          {/each}
        </div>
      {/if}
      <div class="button">
        <Button bind:button={acceptanceCatalogData.button} />
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    color: #363433;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .content {
    font-size: 16px;
    line-height: 22px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 22px;
  }
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  .button > :global(*) {
    max-width: 379px;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    .container {
      gap: 40px;
    }
    .list {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .content {
      font-size: 20px;
      line-height: 23px;
      gap: 23px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    h2 {
      max-width: 744px;;
    }
    .list {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .button {
      margin-top: 20px;
    }
  }

  @media (min-width: 1200px) {
    .list {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }

</style>
