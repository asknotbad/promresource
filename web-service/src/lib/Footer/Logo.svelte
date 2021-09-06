<script>
  export let logo;
</script>

<div class="logo">
  <a href="/">
    {#if logo && logo.img && logo.img.url !== ''}
      <img src={logo.img.url} alt={logo.text}>
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
    max-width: 50%;
  }
  img {
    object-fit: contain;
    object-position: center;
  }

  @media (min-width: 576px) {
    .logo {
      justify-content: flex-start;
      align-items: start;
      margin-bottom: 0;
    }
    a {
      justify-content: flex-start;
      align-items: start;
      max-width: 100%;
    }
    img {
      object-position: left top;
    }
  }

  @media (min-width: 768px) {
    a {
      max-width: 50%;
    }
  }

  @media (min-width: 1200px) {
    .logo {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      width: 160px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: left center;
    }
    a {
      max-width: 100%;
    }
  }
</style>
