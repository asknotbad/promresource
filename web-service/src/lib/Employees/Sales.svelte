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
      gap: 30px;
      grid-template-columns: 1fr 1fr 1fr;
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
