<script>
  import { addZero } from "$lib/helpers";
  import Carousel from "./Carousel.svelte";

  export let item;
  export let i;
</script>

{#if item}
  <article>
    <h3>
      {item.header}
      <span>
        {addZero(i + 1)}
      </span>
    </h3>
    {#if item.carousel && item.carousel.slides && item.carousel.slides.length > 0}
      <Carousel bind:slides={item.carousel.slides} bind:controls={item.carousel.controls}  />
    {/if}
    <div class="content">
      {@html item.content}
    </div>
  </article>
{/if}

<style>
  article {
    z-index: 1;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
  }
  h3 {
    color: #fff;
    position: relative;
    background: #363433;
    min-height: 70px;
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 25px;
    padding-left: 30px;
    z-index: 1;
  }
  h3::before,
  h3::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 50vW;
    height: 100%;
    z-index: -1;
    background: #363433;
    pointer-events: none;
  }
  h3::before {
    right: 100%;
  }
  h3::after {
    left: 100%;
  }
  h3 span {
    position: absolute;
    left: 0;
    top: 40px;
    transform: translateY(-50%);
    font-weight: 700;
    font-size: 50px;
    line-height: 59px;
    color: rgba(255, 255, 255, 0.5);
    z-index: 0;
  }
  .content {
    font-size: 14px;
    line-height: 16px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (min-width: 768px) {
    article {
      grid-template-columns: 5fr 7fr;
      column-gap: 30px;
      row-gap: 25px;
      min-height: 300px;
      align-content: start;
    }
    h3,
    .content {
      grid-column: 2 / 3;
    }
    h3::before {
      width: 40px;
    }
  }

  @media (min-width: 992px) {
    article {
      grid-template-columns: 1fr 2fr;
    }
    h3 {
      padding-right: 15px;
    }
    h3::after {
      display: none;
    }
    .content {
      font-size: 16px;
      line-height: 19px;
      gap: 19px;
    }
  }
</style>
