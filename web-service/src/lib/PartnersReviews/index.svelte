<script>
  import Carousel from './Carousel.svelte';

  export let partnersReviewsData;
</script>

{#if partnersReviewsData}
  <section class="partners-reviews">
    <div class="container">
      <h2>
        {partnersReviewsData.header}
      </h2>
      <Carousel bind:carouselData={partnersReviewsData.carousel} />
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
  }
  h2 {
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    h2 {
      margin-bottom: 40px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    h2 {
      margin-bottom: 60px;
    }
  }

</style>
