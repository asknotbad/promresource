<script>
  import Button from '$lib/Button/index.svelte';
  import { activeModal, modalData } from '$lib/stores';

  function toggleModal(modalName, items) {
    if (items && items.length > 0) {
      modalData.set(items);
    } else {
      modalData.set($modalData.items);
      activeModal.set(modalName);
    };
  };

  function closeModal() {
    activeModal.set(null);
    modalData.set(null);
  };
</script>

{#if $modalData}
  <div class="wrapper">
    {#each $modalData as item}
      {#if item.isActive === true}
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
              <a class="link" href={item.link.url}  on:click={closeModal}>
                {item.link.text} <img class="link-icon" src={item.link.icon.url} alt="">
              </a>
            {:else if item.link.action && item.link.action === 'openModal'}
              <button class="link" on:click|preventDefault={() => toggleModal('partnership', item.items)} >
                {item.link.text} <img class="link-icon" src={item.link.icon.url} alt="">
              </button>
            {/if}
          {/if}
          {#if item.button && item.button.isActive === true}
            <Button bind:button={item.button} />
          {/if}
        </article>
      {/if}
    {/each}
  </div>
{/if}

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
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
    .wrapper {
      gap: 30px;
    }
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
  }

  @media (min-width: 992px) {
    .wrapper {
      gap: 40px;
    }
  }
</style>
