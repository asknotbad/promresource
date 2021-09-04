<script>
  import ItemCard from './ItemCard.svelte';

  export let companyStatsData;
</script>

{#if companyStatsData}
  <section>
    <img src={companyStatsData.bg.file.url} alt={companyStatsData.bg.alt}>
    <div class="container">
      <h2>
        {companyStatsData.header}
      </h2>
      <div class="cards">
        {#each companyStatsData.items as item}
          {#if item.isActive === true}
            <ItemCard bind:item />
          {/if}
        {/each}
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    position: relative;
    z-index: 1;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  h2 {
    color: #fff;
    margin-bottom: 30px;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    h2 {
      margin-bottom: 40px;
    }
    .cards {
      grid-template-columns: 1fr 1fr;
      column-gap: 30px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    h2 {
      margin-bottom: 40px;
    }
    .cards {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 30px;
    }

  }
</style>
