<script>
  import CatalogItem from './CatalogItem.svelte';

  export let catalogData;
</script>

{#if catalogData}
  <section>
    <div class="container">
      {#each catalogData as item}
        {#if item.isActive === true}
          <CatalogItem bind:item />
        {/if}
      {/each}
    </div>
  </section>
{/if}

<style>
  section {
    padding-bottom: 60px;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (min-width: 768px) {
    section {
      padding-bottom: 80px;
    }
    .container {
      gap: 30px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding-bottom: 100px;
    }
    .container {
      gap: 40px;
    }
  }

</style>
