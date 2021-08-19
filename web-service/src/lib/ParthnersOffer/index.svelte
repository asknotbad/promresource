<script>
  import Button from '$lib/Button/index.svelte';

  export let parthnersOfferData;
  export let noPadding = false;
</script>

{#if parthnersOfferData}
  <section class:no-padding={noPadding}>
    <div class="container">
      <h2>
        {parthnersOfferData.header}
      </h2>
      <div class="content">
        {@html parthnersOfferData.content}
      </div>
      <div class="accent">
        {#if parthnersOfferData.accent}
          <div class="accent__content">
            {@html parthnersOfferData.accent.content}
          </div>
          {#if parthnersOfferData.accent.listItems && parthnersOfferData.accent.listItems.length > 0}
            <ul class="accent__list">
              {#each parthnersOfferData.accent.listItems as item}
                {#if item.isActive === true}
                  <li class="accent__list-item">
                    {@html item.content}
                  </li>
                {/if}
              {/each}
            </ul>
          {/if}
        {/if}
      </div>
      <div class="cover">
        {#if parthnersOfferData.cover}
          <img src={parthnersOfferData.cover.file.url} alt={parthnersOfferData.cover.alt}>
          {#if parthnersOfferData.cover.overlay && parthnersOfferData.cover.overlay !== ''}
            <div class="overlay" style="background: {parthnersOfferData.cover.overlay};"></div>
          {/if}
        {/if}
      </div>
      <div class="warning">
        {#if parthnersOfferData.warning}
          <img class="warning-icon" src={parthnersOfferData.warning.icon.file.url} alt={parthnersOfferData.warning.icon.alt}>
          <div class="warning-content">
            {@html parthnersOfferData.warning.content}
          </div>
        {/if}
      </div>
      <div class="buttons">
        {#if parthnersOfferData.buttons}
          {#each parthnersOfferData.buttons as button}
            {#if button.isActive === true}
              <Button bind:button />
            {/if}
          {/each}
        {/if}
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    background: #fff;
    padding: 60px 0;
    overflow-x: hidden;
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
  .content {
    font-size: 16px;
    line-height: 19px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
  }
  .accent {
    position: relative;
    z-index: 1;
    color: #fff;
    background: #363433;
    padding: 30px 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    font-size: 16px;
    line-height: 19px;
  }
  .accent::before,
  .accent::after {
    content: '';
    display: block;
    pointer-events: none;
    width: 50vw;
    height: 100%;
    position: absolute;
    top: 0;
    background: #363433;
  }
  .accent::before {
    right: 100%;
  }
  .accent::after {
    left: 100%;
  }
  .accent__content :global(b) {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #E52B32;
  }
  .accent__list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
  }
  .accent__list :global(span) {
    color: #E52B32;
  }
  .warning {
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 12px;
    align-items: center;
  }
  .warning-icon {
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
  .warning-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    font-size: 14px;
    line-height: 16px;
  }
  .cover {
    /* margin: 0 -15px; */
    position: relative;
    z-index: 1;
  }
  .cover img {
    width: 100%;
    z-index: 0;
  }
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }
  .buttons {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (min-width: 576px) {
    .warning {
      justify-content: flex-start;
    }
    .cover {
      margin: 0;
    }
  }

  @media (min-width: 768px) {
    .container {
      grid-template-columns: 7fr 5fr;
    }
    h2 {
      grid-column: span 2;
    }
    .content {
      grid-column: span 2;
    }
    .accent {
      grid-column: 2 / 3;
    }
    .accent::before {
      width: 30px;
    }
    .cover {
      grid-column: 1 / 2;
      grid-row: 3 / 5;
    }
    .cover img {
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  @media (min-width: 992px) {
    .container {
      grid-template-columns: 1fr 1fr;
    }
    .content {
      grid-column: 2 / 3;
    }
    .cover {
      grid-column: 1 / 2;
      grid-row: 2 / 5;
    }
  }

</style>
