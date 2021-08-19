<script>
  import arrow from './arrow.svg';

  export let item;
</script>

{#if item}
  <article>
    <img src={item.cover.file.url} alt={item.cover.alt}>
    <h3>
      {item.header}
    </h3>
    <a href="/">
      Подробнее
      <img src={arrow} alt="">
    </a>
  </article>
{/if}

<style>
  article {
    border: 1px solid #363433;
    padding-bottom: 27px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 25px;
  }
  article > img {
    width: 100%;
    height: 236px;
    object-fit: cover;
    object-position: center;
  }
  h3 {
    margin: 0 15px;
  }
  a {
    margin: 0 15px;
    display: grid;
    grid-template-columns: min-content 32px;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    gap: 10px;
    margin-right: auto;
    color: #E52B32;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
  a img {
    width: 100%;
  }
</style>
