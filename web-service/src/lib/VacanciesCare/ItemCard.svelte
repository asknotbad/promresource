<script>
  export let item;
</script>

{#if item}
  <article>
    <img src={item.cover.file.url} alt={item.cover.alt}>
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
    border: 1px solid #FFFFFF;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;
    padding: 0 0 30px 0;
  }
  h3 {
    font-size: 22px;
    line-height: 26px;
    padding: 0 20px;
  }
  .content {
    font-size: 16px;
    line-height: 19px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
    padding: 0 20px;
  }
</style>
