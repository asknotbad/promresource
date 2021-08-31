<script>
  export let item;

  let prices;
  $: prices = item.prices.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
</script>

{#if item}
  <article>
    <img src={item.photo.file.url} alt={item.photo.alt}>
    <h3>
      {item.header}
    </h3>
    {#if prices.length > 0}
      <div class="price">
        От {prices[0].price} ₽ за 1 кг
      </div>
    {/if}
  </article>
{/if}

<style>
  article {
    border: 1px solid #363433;
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    padding-bottom: 30px;
  }
  img {
    width: 100%;
    height: 155px;
    object-fit: cover;
    object-position: center;
    margin-bottom: 5px;
  }
  h3 {
    color: #424242;
    padding: 0 17px;
    font-size: 18px;
    line-height: 21px;
  }
  .price {
    padding: 0 17px;
    font-size: 16px;
    line-height: 19px;
    color: #2C14B2;
  }
</style>
