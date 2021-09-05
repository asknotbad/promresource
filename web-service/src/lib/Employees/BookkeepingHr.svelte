<script>
  export let bkData;
  export let hrData;
</script>

{#if bkData && hrData}
  <section>
    <div class="container">
      Bookkeeping & Hr
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    background: #363433;
    color: #fff;
  }
</style>
