<script>
  import Button from '$lib/Button/index.svelte';

  export let catalogData;
  export let acceptanceCatalogTextData;
</script>

{#if acceptanceCatalogTextData && catalogData}
  <section>
    <div class="container">
      <article>
        <div class="cover">
          {#if acceptanceCatalogTextData.cover}
            <img src={acceptanceCatalogTextData.cover.file.url} alt={acceptanceCatalogTextData.cover.alt}>
          {/if}
        </div>
        <h2>
          {acceptanceCatalogTextData.header}
        </h2>
        <div class="content">
          {@html acceptanceCatalogTextData.content}
        </div>
        <div class="button">
          <Button bind:button={acceptanceCatalogTextData.button} />
        </div>
      </article>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
  }
  article {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
  .cover {
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    height: 194px;
    object-fit: cover;
    object-position: center;
  }
  .content {
    font-size: 16px;
    line-height: 19px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
  }
</style>
