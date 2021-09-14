<script>
  import Button from '$lib/Button/index.svelte';

  export let item;

  let isOpen = false;

  function toggleOpen() {
    isOpen = !isOpen;
  }
</script>

{#if item}
  <article class:open={isOpen}>
    <div class="photo">
      {#if item.photo}
        <img src={item.photo.file.url} alt={item.photo.alt}>
      {/if}
    </div>
    <h3>
      {item.header}
    </h3>
    <div class="description">
      {@html item.description}
    </div>
    <div class="button">
      {#if item.buttonCatalog && item.buttonCatalog.isActive === true}
        <Button bind:button={item.buttonCatalog} on:click={toggleOpen} bind:isOpen />
      {/if}
    </div>
    <ul class:open={isOpen}>
      {#each item.prices as price}
        {#if price.isActive === true}
          <li>
            <span>
              {price.name}
            </span>
            <span class="accent">
              от {price.price} руб.
            </span>
          </li>
        {/if}
      {/each}
    </ul>
  </article>
{/if}

<style>
  article {
    display: grid;
    grid-template-columns: 1fr;
    border: 1px solid #363433;
    padding-bottom: 30px;
  }
  .photo {
    height: 127px;
    margin-bottom: 25px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  h3 {
    font-size: 18px;
    line-height: 21px;
    padding: 0 20px;
    margin-bottom: 20px;
  }
  .description {
    padding: 0 20px;
    font-size: 16px;
    line-height: 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }
  .button {
    padding: 0 20px;
  }
  ul {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: .25s ease-in-out;
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
  }
  ul.open {
    max-height: none;
    margin-top: 20px;
  }
  li {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    word-break: break-all;
  }
  span.accent {
    color: #E52B32;
    word-break: normal;
    white-space: nowrap;
  }

  @media (min-width: 576px) {
    .photo {
      height: 200px;
    }
    li {
      word-break: normal;
    }
  }

  @media (min-width: 768px) {
    article {
      grid-template-columns: 1fr 3fr;
      padding-bottom: 0;
      border: none;
    }
    .photo {
      grid-row: span 4;
      height: 100%;
      align-self: stretch;
      margin-bottom: 0;
    }
    h3 {
      padding: 25px 30px;
      margin-bottom: 0;
      border: 1px solid #363433;
      border-bottom: none;
      font-size: 22px;
      line-height: 26px;
    }
    .description {
      border: 1px solid #363433;
      border-top: none;
      border-bottom: none;
      padding: 0 30px 25px 30px;
      margin-bottom: 0;
    }
    .button {
      border: 1px solid #363433;
      border-top: none;
      padding: 0 30px 25px 30px;
      display: flex;
    }
    .button > :global(*) {
      width: auto;
      margin-right: auto;
      padding-left: 28px;
      padding-right: 28px;
    }
    ul.open {
      margin-top: 20px;
    }
    li {
      font-size: 20px;
      line-height: 23px;
    }
  }

  @media (min-width: 992px) {
    h3 {
      padding: 30px;
    }
    .button {
      padding: 30px;
    }
    .button > :global(*) {
      padding-left: 34px;
      padding-right: 34px;
    }
    ul.open {
      margin-top: 30px;
    }
  }
</style>
