<script>
  import { onMount } from 'svelte';
  import './tiny-slider.css';

  export let slides;
  export let controls;

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
      gutter: 30,
    });

    carousel.events.on('indexChanged', getCurrentIndex);

  });

  $: currentIndex = carousel ? carousel.getInfo().index : 1;
</script>

{#if slides && slides.length > 0}
  <div class="wrapper structure-carousel">
    <div class="carousel" bind:this={container}>
      {#each slides as slide, i}
        <div class="slide">
          <img src={slide.img.file.url} alt={slide.img.alt}>
        </div>
      {/each}
    </div>
    {#if controls && controls.arrows && controls.arrows.isActive === true}
      <div class="controls">
        <button class="prev" on:click={prev}>
          <img src={controls.arrows.prev.img.file.url} alt={controls.arrows.prev.img.alt}>
        </button>
        <button class="next" on:click={next}>
          <img src={controls.arrows.next.img.file.url} alt={controls.arrows.next.img.alt}>
        </button>
      </div>
    {/if}
    <div class="counter">
      {currentIndex} / {slides.length}
    </div>
  </div>
{/if}

<style>
  .wrapper {
    position: relative;
    margin-bottom: 25px;
    z-index: 1;
  }
  .carousel {
    height: 100%;
    z-index: 0;
  }
  .slide {
    height: 100%;
    cursor: pointer;
  }
  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .counter {
    position: absolute;
    font-weight: 700;
    pointer-events: none;
    top: 19px;
    right: 22px;
    text-align: right;
    font-size: 22px;
    line-height: 26px;
    color: #E52B32;
    z-index: 1;
  }
  .controls {
    position: absolute;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    z-index: 1;
  }
  button {
    width: 42px;
    height: 42px;
    border: none;
    background: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    pointer-events: all;
  }
  button img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    .wrapper {
      position: absolute;
      height: 100%;
      width: calc((100% / 12) * 5 - 15px);
    }
  }

  @media (min-width: 992px) {
    .wrapper {
      width: calc((100% / 12) * 4 - 15px);
    }
  }
</style>
