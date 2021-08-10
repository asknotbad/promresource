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
  }
</style>
