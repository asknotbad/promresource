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
    .cover {
      height: 378px;
    }
  }

</style>
