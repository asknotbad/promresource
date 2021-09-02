<script>
  import ItemCard from './ItemCard.svelte';

  export let catalogData;
  export let realizationCatalogData;
</script>

{#if catalogData && realizationCatalogData}
  <section>
    <div class="container">
      <h2>
        {realizationCatalogData.header}
      </h2>
      <div class="cards">
        {#each catalogData as item}
          <ItemCard bind:item />
        {/each}
      </div>
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
  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    .cards {
      gap: 30px;
    }
  }

</style>
