<script>
  import Button from '$lib/Button/index.svelte';
  import Table from './Table.svelte';

  export let items;
  export let acceptanceCatalogData;
</script>

{#if items && acceptanceCatalogData}
  <section class="acceptance-catalog">
    <div class="container">
      <h2>
        {acceptanceCatalogData.header}
      </h2>
      <div class="content">
        {@html acceptanceCatalogData.content}
      </div>
      <Table bind:items />
      <div class="button">
        <Button bind:button={acceptanceCatalogData.button} />
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    color: #363433;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .content {
    font-size: 16px;
    line-height: 22px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 22px;
  }
  .button > :global(*) {
    max-width: 379px;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    .container {
      gap: 40px;
    }
    .content {
      font-size: 20px;
      line-height: 23px;
      gap: 23px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    h2 {
      max-width: 744px;;
    }
    .button {
      margin-top: 20px;
    }
  }
</style>
