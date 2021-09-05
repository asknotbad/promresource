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
      padding: 60px 0;
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
    .cards {
      gap: 30px;
    }
  }
</style>
