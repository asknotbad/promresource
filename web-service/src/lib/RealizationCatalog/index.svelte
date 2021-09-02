<script>
  export let catalogData;
  export let realizationCatalogData;
</script>

{#if catalogData && realizationCatalogData}
  <section>
    <div class="container">
      RealizationCatalog
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
  }
</style>
