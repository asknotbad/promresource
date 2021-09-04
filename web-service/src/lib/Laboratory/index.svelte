<script>
  import Carousel from './Carousel.svelte';

  export let laboratoryData;
</script>

{#if laboratoryData}
  <section class="laboratory">
    <div class="container">
      <h2>
        {laboratoryData.header}
      </h2>
      <div class="content">
        {@html laboratoryData.content}
      </div>
      <Carousel bind:carouselData={laboratoryData.carousel} />
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
      grid-template-columns: 5fr 7fr;
      column-gap: 30px;
      row-gap: 60px;
    }
    h2 {
      grid-column: span 2;
      margin-bottom: 0;
    }
    .content {
      grid-column: 2 / 3;
    }
  }

</style>
