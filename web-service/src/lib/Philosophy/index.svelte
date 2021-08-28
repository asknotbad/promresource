<script>
  export let philosophyData;
  export let noPadding = false;
</script>

{#if philosophyData}
  <section class:no-padding={noPadding}>
    <div class="container">
      <h2>
        {philosophyData.header}
      </h2>
      <div class="cards">
        {#each philosophyData.items as  item}
          {#if item.isActive === true}
            <article>
              <h3>
                {item.header}
              </h3>
              <div class="content">
                {@html item.content}
              </div>
            </article>
          {/if}
        {/each}
      </div>
      <div class="cover">
        <img src={philosophyData.cover.file.url} alt={philosophyData.cover.alt}>
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    position: relative;
    z-index: 1;
  }
  section.no-padding {
    padding: 0;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  h2 {
    position: relative;
    color: #fff;
    padding: 30px 0;
    background: #363433;
    z-index: 1;
    padding-right: 60px;
  }
  h2::before {
    content: '';
    display: block;
    width: 100vw;
    height: 100%;
    background: #363433;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: -1;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  article {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    color: #363433;
  }
  article:not(:last-of-type) {
    padding-bottom: 20px;
    border-bottom: 1px solid #E52B32;
  }
  h3 {
    padding-right: 60px;
    font-size: 20px;
    line-height: 25px;
  }
  .content {
    font-size: 16px;
    line-height: 21px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 21px;
  }
  .content :global(ul),
  .content :global(ol) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 21px;
  }
  .content :global(ul > li::before) {
    content: '—';
    color: #2C14B2;
  }
  .cover {
    height: 177px;
  }
  .cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: 576px) {
    .cover {
      height: 320px;
    }
  }
  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    .container {
      gap: 40px;
    }
    h2 {
      padding: 60px 0;
      font-size: 35px;
      line-height: 41px;
      padding-right: 0;
    }
    .cards {
      gap: 30px;
    }

    article {
      gap: 20px;
    }
    article:not(:last-of-type) {
      padding-bottom: 30px;
    }
    h3 {
      line-height: 23px;
    }
    .cover {
      height: 378px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 80px 0;
    }
    .container {
      grid-template-columns: 5fr 7fr;
      column-gap: 30px;
      row-gap: 60px;
    }
    h2::before {
      left: auto;
      right: -30px;
      transform: none;
    }
    article,
    article:not(:last-of-type) {
      padding-bottom: 20px;
      border-bottom: 1px solid #E52B32;
    }
    .content {
      line-height: 19px;
      gap: 19px;
    }
    .content :global(ul),
    .content :global(ol) {
      gap: 19px;
    }
    .cover {
      height: 100%;
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }
  }

</style>
