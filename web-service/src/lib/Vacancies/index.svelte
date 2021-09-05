<script>
  import Item from './Item.svelte';
  export let vacanciesData;
</script>

{#if vacanciesData}
  <section>
    <div class="container">
      <h2>
        {vacanciesData.header}
      </h2>
      <div class="items">
        {#each vacanciesData.items as item}
          {#if item.isActive === true}
            <Item bind:item />
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
  .items {
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
