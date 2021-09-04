<script>
  import { addZero } from '$lib/helpers';

  export let item;
  export let i;
</script>

{#if item}
  <article>
    <div class="index">
      {addZero(i+1)}
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
    background: #363433;
    box-shadow: 0px 5px 5px 3px rgba(152, 152, 152, 0.05);
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    color: #fff;
    padding: 50px 25px;
    text-align: center;
  }
  .index {
    font-weight: 700;
    font-size: 70px;
    line-height: 82px;
    color: #E52B32;
  }
  h3 {
    font-size: 18px;
    line-height: 21px;
  }
  .content {
    font-size: 14px;
    line-height: 16px;
  }

  @media (min-width: 576px) {
    article {
      grid-template-columns: min-content 1fr;
      column-gap: 25px;
      align-items: center;
      align-content: center;
    }
    .index {
      grid-row: span 2;
    }
    h3 {
      text-align: left;
    }
    .content {
      text-align: left;
    }
  }
</style>
