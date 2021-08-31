<script>
  export let partnerTypesData;
</script>

{#if partnerTypesData}
  <section>
    <div class="container">
      <h2>
        {partnerTypesData.header}
      </h2>
      <div class="content">
        {@html partnerTypesData.content}
      </div>
      <ul>
        {#each partnerTypesData.items as item}
          {#if item.isActive === true}
            <li>
              <article>
                <div class="icon">
                  <img src={item.icon.file.url} alt={item.icon.alt}>
                </div>
                <h3>
                  {item.header}
                </h3>
                <div class="item-content">
                  {@html item.content}
                </div>
              </article>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    color: #363433;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .content {
    font-size: 20px;
    line-height: 26px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 26px;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  article {
    border: 1px solid #363433;
    padding: 15px ;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .icon {
    height: 88px;
  }
  .icon img {
    width: 88px;
    height: 88px;
    margin: 0 auto;
    object-fit: contain;
    object-position: center;
  }
  h3 {
    font-size: 18px;
    line-height: 21px;
    margin: 15px 0;
  }
  .item-content {
    font-size: 14px;
    line-height: 18px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
  }

  @media (min-width: 576px) {
    section {
      padding: 80px 0;
    }
    .content {
      gap: 40px;
    }
    article {
      display: grid;
      min-height: 208px;
      padding: 30px;
      display: grid;
      grid-template-columns: 88px 1fr;
      align-content: center;
      gap: 20px;
      text-align: left;
    }
    .icon {
      grid-row: span 2;
    }
    h3 {
      margin: 0;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    ul {
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 30px;
    }
    article {
      height: 100%;
      min-height: 302px;
      padding: 30px;
      align-content: start;
    }
    h3 {
      font-size: 22px;
      line-height: 26px;
    }
    .icon {
      grid-row: span 1;
    }
    .item-content {
      grid-column: span 2;
    }
  }

</style>
