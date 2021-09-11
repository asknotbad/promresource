<script>
  import { modalData } from '$lib/stores';
</script>

{#if $modalData}
  <div class="wrapper">
    <img src={$modalData} alt="">
  </div>
{/if}

<style>

</style>
