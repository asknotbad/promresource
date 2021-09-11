<script>
  import Button from '$lib/Button/index.svelte';

  export let orderRequestData;
</script>

{#if orderRequestData}
  <section>
    <img src={orderRequestData.bg.file.url} alt={orderRequestData.bg.alt})>
    <div class="container">
      <h2>
        {orderRequestData.header}
      </h2>
      <div class="button">
        <Button bind:button={orderRequestData.button} bind:dataForModal={orderRequestData} />
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    background-size: cover;
    background-position: center;
    padding: 60px 0;
    position: relative;
    z-index: 1;
    color: #fff;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
    pointer-events: none;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    .container {
      gap: 40px;
    }
    .button {
      max-width: 331px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 50px 0;
    }
    .container {
      grid-template-columns: 1fr 331px;
      align-items: center;
      gap: 60px;
    }
    h2 {
      font-size: 30px;
      line-height: 35px;
    }
  }
</style>
