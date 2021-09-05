<script>
  export let purchaseData;
  export let lpData;
</script>

{#if purchaseData && lpData}
  <section>
    <div class="container">
      purchase & laborProtection
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
  }
</style>
