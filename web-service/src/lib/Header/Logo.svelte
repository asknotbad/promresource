<script>
  export let logo;
</script>

<div class="logo">
  <a href="/">
    {#if logo && logo.url && logo.url !== ''}
      <img src={logo.url} alt={logo.text}>
    {:else}
      {logo.text}
    {/if}
  </a>
</div>

<style>
  .logo {
    grid-column: span 2;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }

  @media (min-width: 1200px) {
    .logo {
      grid-column: 1 / 2;
      margin-right: 10px;
    }
  }
</style>
