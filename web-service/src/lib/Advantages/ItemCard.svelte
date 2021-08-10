<script>
  import { addZero } from '$lib/helpers';
  export let item;
  export let i;
</script>

{#if item}
  <article>
    <div class="icon">
      <img src={item.icon.file.url} alt={item.icon.alt}>
      <div class="number">
        {addZero(i + 1)}
      </div>
    </div>
    <h3>
      {item.header}
    </h3>
    <div class="content">
      {@html item.content}
    </div>
  </article>
{/if}

<style>
  article {
    background: #FFFFFF;
    box-shadow: 0px 5px 5px 3px rgba(152, 152, 152, 0.05);
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 20px 15px;
    z-index: 1;
    color: #424242;
  }
  .icon {
    position: relative;
    z-index: 1;
    width: 50px;
    height: 50px;
    margin-right: auto;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: left center;
  }
  .number {
    position: absolute;
    z-index: -1;
    top: -10px;
    right: -30px;
    font-weight: 700;
    font-size: 50px;
    line-height: 50px;
    color: rgba(66, 66, 66, 0.17);
  }
  .content {
    font-size: 14px;
    line-height: 18px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
  }

  @media (min-width: 768px) {
    article {
      grid-template-columns: 70px 1fr;
      column-gap: 60px;
      row-gap: 20px;
      padding: 30px 35px;
    }
    .icon {
      align-self: center;
      width: 70px;
      height: 70px;
    }
    h3 {
      align-self: center;
    }
    .content {
      grid-column: span 2;
      font-size: 16px;
      line-height: 19px;
      gap: 19px;
    }
  }

  @media (min-width: 1200px) {
    article {
      padding: 40px 35px;
    }
  }
</style>
