<script>
  import { onMount } from 'svelte';
  import './documents.css';

  export let carouselData;

  let innerWidth = null;
  let container = false;
  let carousel = false;
  let currentIndex;
  let items = 1;

  $: items = (() => {
    if (innerWidth >= 1200) {
      isCarousel = false;
      return  4;
    } else if (innerWidth < 1200 && innerWidth >= 992) {
      return  4;
    } else if (innerWidth < 992 && innerWidth >= 768) {
      return  3;
    } else if (innerWidth < 768 && innerWidth >= 576) {
      return  2;
    } else if (innerWidth < 576) {
      return 1;
    };
    return 1;
  })();

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
      items,
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

    getCurrentIndex();

    carousel.events.on('indexChanged', getCurrentIndex);
  });
</script>

<svelte:window bind:innerWidth />

{#if carouselData && carouselData.slides.length > 0}
  <div class="wrapper">
    <div class="carousel" bind:this={container}>
      {#each carouselData.slides as slide}
        {#if slide.isActive === true}
          <div class="slide-wrapper">
            <div class="slide">
              <img src={slide.img.file.url} alt={slide.img.alt}>
              <div class="header">
                {slide.header}
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
    {#if carouselData.controls && carouselData.controls.arrows && carouselData.controls.arrows.isActive === true}
      <div class="controls">
        <button class="prev" on:click={prev}>
          <img src={carouselData.controls.arrows.prev.img.file.url} alt={carouselData.controls.arrows.prev.img.alt}>
        </button>
        <div class="count">
          {currentIndex} / {carouselData.slides.length}
        </div>
        <button class="next" on:click={next}>
          <img src={carouselData.controls.arrows.next.img.file.url} alt={carouselData.controls.arrows.next.img.alt}>
        </button>
      </div>
    {/if}
  </div>
{/if}

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .slide {
    height: 100%;
    border: 1px solid #FFFFFF;
    display: grid;
    grid-template-columns: 1fr;
  }
  .slide img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
  }
  .header {
    padding: 20px 15px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
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
    color: #E52B32;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 576px) {
    .slide img {
      height: 314px;
      object-fit: cover;
      object-position: center;
    }
  }

  @media (min-width: 768px) {
    .header {
      padding: 20px 10px;
    }
  }

  @media (min-width: 992px) {
    .wrapper {
      grid-column: span 2;
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
  }

  @media (min-width: 576px) {
    .slide img {
      height: 392px;
    }
  }

</style>
