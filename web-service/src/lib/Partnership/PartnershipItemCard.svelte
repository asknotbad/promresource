<script>
  import Button from '$lib/Button/index.svelte';
  import { activeModal, modalData } from '$lib/stores';

  export let catalogBuyData;
  export let catalogSellData;
  export let catalogServicesData;
  export let item;

  let catalogData;

  switch (item.catalogItemsType) {
    case 'buy':
      catalogData = catalogBuyData;
      break;
    case 'sell':
      catalogData = catalogSellData;
      break;
    case 'services':
      catalogData = catalogServicesData;
      break;
    default:
      catalogData = [];
      break;
  };

  function toggleModal(modalName) {
    if ($activeModal === modalName) {
      activeModal.set(null);
      modalData.set(null);
    } else {
      modalData.set(catalogData);
      activeModal.set(modalName);
    };
  };

</script>

{#if item}
  <article>
    {#if item.cover && item.cover.file}
      <img src={item.cover.file.url} alt={item.cover.alt} class="cover">
    {/if}
    <h3>
      {#if item.header}
        {item.header}
      {/if}
    </h3>
    <div class="announce">
      {#if item.announce}
        {@html item.announce}
      {/if}
    </div>
    {#if item.link && item.link.isActive === true}
      {#if item.link.url && item.link.url !== ''}
        <a class="link" href={item.link.url}>
          {item.link.text} <img class="link-icon" src={item.link.icon.url} alt="">
        </a>
      {:else if item.link.action && item.link.action === 'openModal'}
        <button class="link" on:click|preventDefault={() => toggleModal('partnership')}>
          {item.link.text} <img class="link-icon" src={item.link.icon.url} alt="">
        </button>
      {/if}
    {/if}
    {#if item.button && item.button.isActive === true}
      <Button bind:button={item.button} bind:dataForModal={item} />
    {/if}
  </article>
{/if}

<style>
  article {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 25px;
    border: 1px solid #363433;
    padding: 0 20px 25px 20px;
  }
  .cover {
    margin: 0 -20px;
    width: calc(100% + 40px);
    max-width: none;
    height: 127px;
    object-fit: cover;
    object-position: center;
  }
  .announce {
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
    font-size: 14px;
    line-height: 18px;
  }
  .link {
    min-width: none;
    width: auto;
    display: grid;
    grid-template-columns: min-content 32px;
    gap: 8px;
    align-items: center;
    color: #E52B32;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    white-space: nowrap;
    border: none;
    background: none;
    margin: 0 auto 0 0;
    padding: 0;
  }
  .link-icon {
    width: 100%;
    object-fit: contain;
    object-position: left center;
  }

  @media (min-width: 576px) {
    .cover {
      height: 200px;
    }
  }

  @media (min-width: 768px) {
    article {
      grid-template-columns: 1fr 2fr;
      column-gap: 30px;
      padding: 25px 30px 25px 0;
    }
    .cover {
      margin: 0;
      width: calc((100% / 3) - 15px);
      max-width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    h3 {
      font-size: 22px;
      line-height: 26px;
    }
    .announce {
      font-size: 16px;
      line-height: 19px;
    }
    article > *:not(.cover) {
      grid-column: 2 / 3;
    }
    article > :global(a:not(.link)),
    article > :global(button:not(.link)) {
      grid-column: 2 / 3;
      min-width: 239px;
      width: auto;
      margin-right: auto;
    }
    article:nth-of-type(even) {
      grid-template-columns: 2fr 1fr;
      padding: 25px 0 25px 30px;
    }
    article:nth-of-type(even) .cover {
      left: auto;
      right: 0;
    }
    article:nth-of-type(even) > *:not(.cover) {
      grid-column: 1 / 2;
    }
    article:nth-of-type(even) > :global(a:not(.link)),
    article:nth-of-type(even) > :global(button) {
      grid-column: 1 / 2;
    }
  }
</style>
