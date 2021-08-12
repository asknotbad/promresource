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
    margin: 0 -15px;
    padding: 0 15px;
    color: #fff;
    position: relative;
    background: #363433;
    min-height: 70px;
    display: flex;
    align-items: center;
    padding-top: 16px;
  }
  h3 span {
    position: absolute;
    left: 15px;
    top: 50%;
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
</style>
