<script>
  import Carousel from './Carousel.svelte';

  export let factoryData;
</script>

{#if factoryData}
  <section class="factory">
    <div class="container">
      <h2>
        {factoryData.header}
      </h2>
      <div class="content">
        {@html factoryData.content}
      </div>
      <Carousel bind:carouselData={factoryData.carousel} />
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
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
</style>
