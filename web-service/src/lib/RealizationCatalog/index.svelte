<script>
  import Table from './Table.svelte';

  export let items;
  export let realizationCatalogData;
</script>

{#if items && realizationCatalogData}
  <section>
    <div class="container">
      <h2>
        {realizationCatalogData.header}
      </h2>
      <Table bind:items />
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
