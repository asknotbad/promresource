<script>
  import Button from '$lib/Button/index.svelte';
  import arrowMore from './arrow-more-red.svg';

  export let item;
</script>

{#if item}
  <article>
    <div class="photo">
      <img src={item.photo.file.url} alt={item.photo.alt}>
    </div>
    <h3>
      {item.header}
    </h3>
    <div class="content">
      {@html item.description}
    </div>
    <a class="more" href="/">
      Подробнее <img src={arrowMore} alt="">
    </a>
    <div class="button">
      <Button bind:button={item.button} />
    </div>
  </article>
{/if}

<style>
  article {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 30px;
    border: 1px solid #363433;
    color: #424242;
  }
  .photo {
    margin-bottom: 25px;
  }
  .photo img {
    width: 100%;
    height: 130px;
    object-fit: cover;
    object-position: center;
  }
  h3 {
    padding: 0 20px;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 20px;
  }
  .content {
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 25px;
  }
  .more {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #E52B32;
    margin-left: 20px;
    margin-right: auto;
    margin-bottom: 25px;
    display: grid;
    grid-template-columns: min-content 32px;
    gap: 8px;
    align-items: center;
  }
  .more img {
    width: 32px;
    object-fit: contain;
    object-position: center;
  }
  .button {
    padding: 0 20px 30px 20px;
  }

  @media (min-width: 576px) {
    .photo img {
      height: 240px;
    }
  }

  @media (min-width: 768px) {
    article {
      grid-template-columns: 1fr 2fr;
    }
    article:nth-of-type(odd) {
      padding-right: 32px;
    }
    article:nth-of-type(even) {
      grid-template-columns: 2fr 1fr;
      padding-left: 32px;
    }
    .photo {
      grid-row: span 5;
      align-self: stretch;
      margin-bottom: 0;
    }
    .photo img {
      width: 100%;
      height: 100%;
    }
    article:nth-of-type(even) .photo {
      grid-column: 2 / 3;
    }
    h3 {
      margin-bottom: 25px;
      margin-top: 25px;
      padding: 0;
      font-size: 22px;
      line-height: 26px;
    }
    .content {
      padding: 0;
      font-size: 16px;
      line-height: 19px;
      gap: 19px;
    }
    .more {
      margin-left: 0;
    }
    .button {
      padding: 0;
      margin-bottom: 60px;
      margin-right: auto;
      min-width: 240px;
    }
  }

  @media (min-width: 992px) {
    article:nth-of-type(odd) {
      padding-right: 40px;
    }
    article:nth-of-type(even) {
      padding-left: 40px;
    }
    h3 {
      margin-top: 35px;
    }
    .button {
      margin-bottom: 35px;
    }
  }
</style>
