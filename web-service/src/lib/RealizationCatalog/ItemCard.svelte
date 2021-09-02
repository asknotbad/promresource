<script>
  import Button from '$lib/Button/index.svelte';
  import arrowMore from './arrow-more-red.svg';

  export let item;
</script>

{#if item}
  <article>
    <img class="photo" src={item.photo.file.url} alt={item.photo.alt}>
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
    border: 1px solid #363433;
    color: #424242;
  }
  .photo {
    width: 100%;
    height: 130px;
    object-fit: cover;
    object-position: center;
    margin-bottom: 25px;
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
    padding: 0 20px;
    margin-bottom: 30px;
  }

  @media (min-width: 576px) {
    .photo {
      height: 240px;
    }
  }

</style>
