<script>
  import Item from '$lib/Vacancies/Item.svelte';
import SalesItemCard from './SalesItemCard.svelte';

  export let salesData;
</script>

{#if salesData}
  <section>
    <div class="container">
      <h2>
        {salesData.header}
      </h2>
      <div class="cards">
        {#each salesData.items as item}
          {#if item.isActive === true}
            <SalesItemCard bind:item />
          {/if}
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
    row-gap: 20px;
  }
</style>
