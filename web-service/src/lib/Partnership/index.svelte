<script>
  import PartnershipItemCard from './PartnershipItemCard.svelte';
  export let noPadding = false;
  export let partnershipData;
</script>

{#if partnershipData}
  <section class:no-padding={noPadding}>
    <div class="container">
      <h2>
        {partnershipData.header}
      </h2>
      {#each partnershipData.items as item}
        <PartnershipItemCard bind:item />
      {/each}
    </div>
  </section>
{/if}

<style>
  section {
    position: relative;
    z-index: 1;
    padding: 60px 0;
  }
  section.no-padding {
    padding: 0;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
</style>
