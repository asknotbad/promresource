<script>
  import CertificatesItemCard from './CertificatesItemCard.svelte';

  export let noPadding = false;
  export let certificatesData;
</script>

{#if certificatesData}
  <section class:no-padding={noPadding}>
    <div class="container">
      <h2>
        {certificatesData.header}
      </h2>
      <div class="content">
        {@html certificatesData.content}
      </div>
      {#each certificatesData.items as item, i}
        {#if item.isActive === true}
          <CertificatesItemCard bind:item {i} />
        {/if}
      {/each}
    </div>
  </section>
{/if}

<style>
  section {
    position: relative;
    z-index: 1;
    padding: 60px 0;
    overflow-x: hidden;
  }
  section.no-padding {
    padding: 0;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .content {
    font-size: 16px;
    line-height: 139.19%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    h2 {
      margin-bottom: 10px;
    }
    .content {
      font-size: 20px;
      line-height: 28px;
      gap: 28px;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 1200px) {
    section {
      padding: 100px 0;
    }
    h2 {
      margin-bottom: 30px;
      max-width: none;
    }
    .content {
      margin-bottom: 30px;
      line-height: 23px;
      gap: 23px;
    }
  }

</style>
