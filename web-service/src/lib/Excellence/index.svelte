<script>
  import ItemCard from './ItemCard.svelte';
  export let excellenceData;

  let items = [];

  excellenceData.items.map(item => {
    if (item.isActive === true) {
      items = [...items, item];
      return;
    };
  });
</script>

{#if excellenceData}
  <section>
    <div class="container">
      <h2>
        {excellenceData.header}
      </h2>
      <div class="items">
        {#each items as item, i}
          <ItemCard bind:item {i} />
        {/each}
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
  }
  .items {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  h2 {
    margin-bottom: 21px;
  }
</style>
