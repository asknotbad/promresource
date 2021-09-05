<script>
  import ItemCard from './ItemCard.svelte';

  export let vacanciesCareData;
</script>

{#if vacanciesCareData}
  <section>
    <div class="container">
      <h2>
        {vacanciesCareData.header}
      </h2>
      <div class="cards">
        {#each vacanciesCareData.items as item}
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
    color: #fff;
    background: #363433;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
</style>
