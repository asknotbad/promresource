<script>
  import ItemCard from './ItemCard.svelte';

  export let bkData;
  export let hrData;
</script>

{#if bkData || hrData}
  <section>
    <div class="container">
      {#each bkData.items as item}
        <ItemCard bind:item bind:header={bkData.header} />
      {/each}
      {#each hrData.items as item}
        <ItemCard bind:item bind:header={hrData.header} />
      {/each}
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    background: #363433;
    color: #fff;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  h2 {
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    .container {
      row-gap: 30px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 60px;
    }
    h2 {
      grid-column: span 2;
      margin-bottom: 0;
    }
  }

</style>
