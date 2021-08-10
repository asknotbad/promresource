<script>
  import ItemCard from "./ItemCard.svelte";

  export let advantagesData;
</script>

{#if advantagesData}
  <section style="color: {advantagesData.color && advantagesData.color !== '' ? advantagesData.color : 'inherit'};">
    {#if advantagesData.bg}
      <img src={advantagesData.bg.file.url} alt={advantagesData.bg.alt}>
      {#if advantagesData.bg.overlay && advantagesData.bg.overlay !== ''}
        <div class="overlay" style="background: {advantagesData.bg.overlay};"></div>
      {/if}
    {/if}
    <div class="container">
      <h2>
        {advantagesData.header}
      </h2>
      {#each advantagesData.items as item, i}
        {#if item.isActive === true}
          <ItemCard bind:item {i} />
        {/if}
      {/each}
    </div>
  </section>
{/if}

<style>
  section {
    position: relative;
    z-index: 1;
    padding: 60px 0;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
  }
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
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
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    .container {
      grid-template-columns: 1fr 1fr;
    }
    h2 {
      margin-bottom: 30px;
      grid-column: span 2;
    }
  }
</style>
