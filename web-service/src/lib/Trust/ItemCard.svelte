<script>
  export let item;
</script>

{#if item}
  <div class="wrapper">
    <div class="header">
      <div class="header-item">
        <b>Название контрагента:</b> {item.partner}
      </div>
      <div class="header-item">
        <b>Город:</b> {item.city}
      </div>
    </div>
    <div class="photo">
      <img src={item.photo.file.url} alt={item.photo.alt}>
    </div>
    <div class="items">
      {#each item.items as item}
        {#if item.isActive === true}
          <div class="item">
            <div class="item-header">
              {item.header}
            </div>
            <ul>
              {#each item.list as listItem}
                {#if listItem.isActive === true}
                  <li>
                    {listItem.content}
                  </li>
                {/if}
              {/each}
            </ul>
          </div>
        {/if}
      {/each}
    </div>
  </div>
{/if}

<style>
  .wrapper {
    position: relative;
    z-index: 1;
    border-bottom: 1px solid #E52B32;
    display: grid;
    grid-template-columns: 1fr;
  }
  .header {
    font-size: 18px;
    line-height: 21px;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 21px;
    position: relative;
    z-index: -1;
    background: #363433;
    color: #fff;
    padding: 30px 0 25px 0;
  }
  .header::before,
  .header::after {
    content: '';
    display: block;
    background: #363433;
    width: 100vw;
    height: calc(100% + 45px);
    z-index: -1;
    position: absolute;
    top: 0;
  }
  .header::before {
    right: 50%;
  }
  .header::after {
    left: 50%;
  }
  .photo {
    z-index: 1;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.15));
  }
  img {
    width: 100%;
  }
  .items {
    display: grid;
    grid-template-columns: 1fr;
    align-content: start;
  }
  .item {
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
    font-size: 16px;
    line-height: 19px;
    padding: 20px 0;
  }
  .item:not(:last-child) {
    border-bottom: 1px solid #E52B32;
  }
  .item-header {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr;
  }
  li::before {
    content: '—';
    margin-right: 4px;
  }

  @media (min-width: 768px) {
    .wrapper {
      grid-template-columns: 11fr 13fr;
      column-gap: 25px;
    }
    .header {
      padding: 40px 0;
    }
    .header::before,
    .header::after {
      height: 100%;
    }
    .photo {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      margin-top: -84px;
      margin-bottom: 25px;
    }
    .items {
      grid-column: 1 / 2;
    }
    .item-header {
      font-weight: 500;
    }
  }
  @media (min-width: 992px) {
    .wrapper {
      grid-template-columns: 13fr 11fr;
      column-gap: 45px;
      padding-right: 13px;
      border-bottom: none;
    }
    .wrapper::after {
      content: '';
      position: absolute;
      left: 100%;
      top: 0;
      display: block;
      height: 100%;
      width: 100vw;
      background: #fff;
      z-index: 1;
      pointer-events: none;
    }
    .header {
      padding: 40px 0 60px 0;
    }
    .photo {
      margin-top: -145px;
      margin-bottom: 0;
    }
    .item {
      padding: 20px 0 30px 0;
      border-bottom: 1px solid #E52B32;
    }
    ul {
      gap: 19px;
    }
  }
</style>
