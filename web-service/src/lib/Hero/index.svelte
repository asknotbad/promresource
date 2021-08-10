<script>
  import Button from '$lib/Button/index.svelte';
import { bubble } from 'svelte/internal';

  export let heroData;
</script>

<section style="color: {heroData.textColor};">
  <img src={heroData.cover.file.url} alt={heroData.cover.alt}>
  <div class="overlay" style="background: {heroData.overlayBg};"></div>
  <div class="container">
    <h1>
      {heroData.header}
    </h1>
    <div class="content">
      {@html heroData.content}
    </div>
    <div class="buttons">
      {#each heroData.buttons as button}
        {#if button.isActive === true}
          <Button bind:button />
        {/if}
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    z-index: 1;
    position: relative;
    margin-top: -110px;
    padding-top: 170px;
    padding-bottom: 60px;
  }
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -2;
    object-fit: cover;
    object-position: center;
  }
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    pointer-events: none;
  }
  .container {
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  h1 {
    max-width: 700px;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
  }
  .content {
    display: none;
    font-size: 20px;
    line-height: 23px;
    grid-template-columns: 1fr;
    gap: 23px;
  }
  .buttons {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 466px;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    section {
      padding-top: 165px;
      padding-bottom: 100px;
    }
    .container {
      gap: 40px;
    }
    h1 {
      font-size: 60px;
      line-height: 70px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding-top: 180px;
      padding-bottom: 156px;
    }
    .content {
      display: grid;
      max-width: 500px;
    }
  }

  @media (min-width: 1200px) {
    .buttons {
      grid-template-columns: 1fr 1fr;
      column-gap: 30px;
      row-gap: 20px;
      max-width: 100%;
      margin-right: auto;
    }
  }

</style>
