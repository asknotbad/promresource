<script>
  import ListItem from "./ListItem.svelte";
  export let newsListData;
  export let news;
  export let noPadding = false;
  export let isLastOnPage = false;
</script>

{#if newsListData && news}
  <section class:no-padding={noPadding} class:last={isLastOnPage}>
    <div class="container">
      <h2>
        {newsListData.header}
      </h2>
      <div class="cards">
        {#each news as item}
          <ListItem bind:item />
        {/each}
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
  }
  section.no-padding {
    padding: 0;
  }
  section.last {
    padding-bottom: 60px;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    section.last {
      padding-bottom: 80px;
    }
  .cards {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    section.last {
      padding-bottom: 100px;
    }
  .cards {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

</style>
