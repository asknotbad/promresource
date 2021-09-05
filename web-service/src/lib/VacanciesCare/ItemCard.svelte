<script>
  export let item;
</script>

{#if item}
  <article>
    <div class="cover">
      <img src={item.cover.file.url} alt={item.cover.alt}>
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
    border: 1px solid #FFFFFF;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;
    padding: 0 0 30px 0;
  }
  img {
    width: 100%;
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

  @media (min-width: 768px) {
    article {
      grid-template-columns: 1fr 2fr;
      padding: 0 30px 0 0;
      align-content: start;
      column-gap: 20px;
    }
    .cover {
      grid-row: span 2;
      align-self: stretch;
    }
    img {
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    h3 {
      margin-top: 30px;
      padding: 0;
    }
    .content {
      margin-bottom: 30px;
      padding: 0;
    }
  }

</style>
