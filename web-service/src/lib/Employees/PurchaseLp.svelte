<script>
  import ItemCard from './ItemCard.svelte';

  export let purchaseData;
  export let lpData;
</script>

{#if purchaseData || lpData}
  <section>
    <div class="container">
      {#each purchaseData.items as item}
        <ItemCard bind:item bind:header={purchaseData.header} isWhite />
      {/each}
      {#each lpData.items as item}
        <ItemCard bind:item bind:header={lpData.header} isWhite />
      {/each}
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    background: #fff;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
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
  }

</style>

