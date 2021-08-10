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
    margin-bottom: 20px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    max-width: 50%;
    object-fit: contain;
    object-position: center;
  }
</style>
