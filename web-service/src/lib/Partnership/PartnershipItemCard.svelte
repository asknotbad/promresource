<script>
  import Button from '$lib/Button/index.svelte';

  export let item;
</script>

{#if item}
  <article>
    <img src={item.cover.file.url} alt={item.cover.alt} class="cover">
    <h3>
      {item.header}
    </h3>
    <div class="announce">
      {@html item.announce}
    </div>
    {#if item.link && item.link.isActive === true}
      <a class="link" href={item.link.url}>
        {item.link.text} <img class="link-icon" src={item.link.icon.url} alt="">
      </a>
    {/if}
    {#if item.button && item.button.isActive === true}
      <Button bind:button={item.button} />
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
    width: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: min-content 32px;
    gap: 8px;
    align-items: center;
  }
  .link-icon {
    width: 100%;
    object-fit: contain;
    object-position: left center;
  }
</style>
