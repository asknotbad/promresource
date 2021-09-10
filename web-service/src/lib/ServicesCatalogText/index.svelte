<script>
  import Button from '$lib/Button/index.svelte';

  export let catalogData;
  export let servicesCatalogTextData;
</script>

{#if servicesCatalogTextData && catalogData}
  <section>
    <div class="container">
      <article>
        <div class="cover">
          {#if servicesCatalogTextData.cover}
            <img src={servicesCatalogTextData.cover.file.url} alt={servicesCatalogTextData.cover.alt}>
          {/if}
        </div>
        <h2>
          {servicesCatalogTextData.header}
        </h2>
        <div class="content">
          {@html servicesCatalogTextData.content}
        </div>
        <div class="button">
          <Button bind:button={servicesCatalogTextData.button} />
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

  @media (min-width: 768px) {
    section {
      padding: 80px 0 40px 0;
    }
    article {
      grid-template-columns: 1fr 1fr;
      column-gap: 30px;
      align-items: start;
    }
    .cover {
      margin: 0;
      grid-row: span 4;
      align-self: stretch;
    }
    img {
      min-height: 300px;
      height: 100%;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    article {
      row-gap: 40px;
    }
    .cover {
      margin: 0;
    }
    img {
      min-height: 282px;
    }
    .content {
      line-height: 20px;
      gap: 20px;
    }

  }
</style>
