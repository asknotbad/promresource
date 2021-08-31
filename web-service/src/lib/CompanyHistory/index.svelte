<script>
  import { onMount } from 'svelte';
  import './tiny-slider.css';
  import slideIcon from './slide-icon.svg';

  export let companyHistoryData;
  export let noPadding = false;

  let container = false;
  let carousel = false;
  let items = 1;
  let innerWidth = null;

  $: items = (() => {
    if (innerWidth >= 1200) {
      return 7;
    } else if (innerWidth < 1200 && innerWidth >= 992) {
      return  5;
    } else if (innerWidth < 992 && innerWidth >= 768) {
      return  4;
    } else if (innerWidth < 768 && innerWidth >= 576) {
      return  2;
    } else if (innerWidth < 576) {
      return 1;
    };
    return 1;
  })();

  function prev() {
    carousel.goTo('prev');
  };

  function next() {
    carousel.goTo('next');
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
      loop: false,
      "animateIn": "jello",
      "animateOut": "jello",
      mouseDrag: true,
      gutter: 0,
    });

  });

</script>

<svelte:window bind:innerWidth />

{#if companyHistoryData}
  <section class:no-padding={noPadding} class="company-history">
    <div class="container">
      <h2>
        {companyHistoryData.header}
      </h2>
      <div class="carousel-wrapper">
        <div class="carousel" bind:this={container}>
          {#each companyHistoryData.items as slide}
            <article>
              <div class="slide">
                <div class="icon">
                  <img src={slideIcon} alt="">
                </div>
                <h3>
                  {slide.header}
                </h3>
                <div class="content">
                  {@html slide.content}
                </div>
              </div>
            </article>
          {/each}
        </div>
        {#if companyHistoryData.controls && companyHistoryData.controls.arrows && companyHistoryData.controls.arrows.isActive === true && companyHistoryData.items.length > items}
          <div class="controls">
            <button class="prev" on:click={prev}>
              <img src={companyHistoryData.controls.arrows.prev.img.file.url} alt={companyHistoryData.controls.arrows.prev.img.alt}>
            </button>
            <button class="next" on:click={next}>
              <img src={companyHistoryData.controls.arrows.next.img.file.url} alt={companyHistoryData.controls.arrows.next.img.alt}>
            </button>
          </div>
        {/if}
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    position: relative;
    z-index: 1;
  }
  section.no-padding {
    padding: 0;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .carousel-wrapper {
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.1));
    background: #424242;
    border: 1px solid #000000;
    color: #fff;
    padding: 30px 0;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    overflow-x: hidden;
    width: 100%;
  }
  .carousel-wrapper::before {
    content: '';
    display: block;
    width: calc(100% - 40px);
    height: 1px;
    background: #fff;
    position: absolute;
    left: 20px;
    top: 55px;
    z-index: -1;
    pointer-events: none;
  }
  .carousel {
    width: 100%;
  }
  article {
    max-width: 100%;
  }
  .slide {
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    justify-items: center;
    text-align: center;
  }
  .icon {
    position: relative;
    z-index: 1;
    width: 100%;
  }
  .icon img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    object-position: center;
  }
  h3 {
    font-size: 25px;
    line-height: 29px;
  }
  .content {
    background: #fff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    color: #363433;
    padding: 20px;
    font-size: 14px;
    line-height: 16px;
  }
  .controls {
    margin: 0 auto;
    display: grid;
    grid-template-columns: min-content min-content;
    gap: 25px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }
  button img {
    width: 100%;
  }

  @media (min-width: 576px) {
    .carousel-wrapper::before {
      width: calc(100% - 240px);
      left: 120px;
      top: 55px;
    }
    .controls {
      margin-left: 80px;
    }
  }

  @media (min-width: 768px) {
    .carousel-wrapper::before {
      width: calc(100% - 180px);
      left: 90px;
      top: 55px;
    }
    .controls {
      margin-left: 32px;
    }
  }
</style>
