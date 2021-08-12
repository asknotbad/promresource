<script>
  import OrganisationStructureItemCard from './OrganisationStructureItemCard.svelte';

  export let noPadding = false;
  export let organisationStructureData;
</script>

{#if organisationStructureData}
  <section class:no-padding={noPadding}>
    <div class="container">
      <h2>
        {organisationStructureData.header}
      </h2>
      {#each organisationStructureData.items as item, i}
        {#if item.isActive === true}
          <OrganisationStructureItemCard bind:item {i} />
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
    overflow-x: hidden;
  }
  section.no-padding {
    padding: 0;
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
    h2 {
      margin-bottom: 10px;
    }
  }

  @media (min-width: 1200px) {
    section {
      padding: 100px 0;
    }
    h2 {
      margin-bottom: 30px;
      max-width: none;
    }
  }

</style>
