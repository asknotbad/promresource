<script>
  import Carousel from './Carousel.svelte';
  import Documents from './Documents.svelte';

  export let deliveryData;
</script>

{#if deliveryData}
  <section class="delivery">
    <div class="container">
      <h2>
        {deliveryData.header}
      </h2>
      <div class="content">
        {@html deliveryData.content}
      </div>
      <Carousel bind:carouselData={deliveryData.carousel} />
      <div class="documents">
        <Documents bind:carouselData={deliveryData.documents} />
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    color: #fff;
    background: #363433;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    align-content: start;
    align-items: start;
  }
  h2 {
    margin-bottom: 10px;
  }
  .content {
    font-size: 16px;
    line-height: 19px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
  }
  .content :global(b) {
    font-weight: 500;
  }
  .content :global(ul) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
  }
  .content :global(ul > li::before) {
    content: '—';
    margin-right: 4px;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    .container {
      gap: 24px;
    }
    h2 {
      margin-bottom: 16px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    .container {
      grid-template-columns: 7fr 5fr;
      column-gap: 30px;
      row-gap: 60px;
    }
    h2 {
      grid-column: span 2;
      margin-bottom: 0;
    }
    .documents {
      grid-column: span 2;
    }
  }

</style>
