<script>
  import ItemCard from './ItemCard.svelte';
  import arrowLeft from './arrow-left.svg';
  import arrowRight from './arrow-right.svg';
  import { onMount } from 'svelte';

  export let items;

  let container = false;
  let carousel = false;
  let currentIndex;

  function getCurrentIndex() {
    currentIndex = carousel.getInfo().displayIndex;
  };

  function prev() {
    carousel.goTo('prev');
    getCurrentIndex();
  };

  function next() {
    carousel.goTo('next');
    getCurrentIndex();
  };

  onMount(async () => {
    const tinySlider = await import('tiny-slider/src/tiny-slider');
    carousel = tinySlider.tns({
      container,
      items: 1,
      mode: 'carousel',
      slideBy: 'page',
      controls: false,
      autoplay: false,
      nav: false,
      loop: true,
      "animateIn": "jello",
      "animateOut": "jello",
      mouseDrag: true,
      gutter: 0,
    });

    getCurrentIndex();

    carousel.events.on('indexChanged', getCurrentIndex);
  });

</script>

{#if items && items.length > 0}
  <div class="wrapper">
    <div class="carousel" bind:this={container}>
      {#each items as item}
        <ItemCard bind:item />
      {/each}
    </div>
    <div class="controls">
      <button class="prev"  on:click={prev}>
        <img src={arrowLeft} alt="">
      </button>
      <div class="count">
        {currentIndex} / {items.length}
      </div>
      <button class="next" on:click={next}>
        <img src={arrowRight} alt="">
      </button>
    </div>
  </div>
{/if}

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    border: none;
    margin: 0;
    padding: 0;
    width: 30px;
    height: 30px;
    background: none;
    cursor: pointer;
  }
  .prev {
    margin-right: 30px;
  }
  .next {
    margin-left: 30px;
  }
  .count {
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #2C14B2;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
