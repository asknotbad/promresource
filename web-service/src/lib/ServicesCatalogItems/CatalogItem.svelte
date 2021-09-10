<script>
  import Button from '$lib/Button/index.svelte';

  export let item;
</script>

{#if item}
  <article>
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
      {#if item.button && item.button.isActive === true}
        <Button bind:button={item.button} />
      {/if}
    </div>
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

  @media (min-width: 576px) {
    .photo {
      height: 200px;
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
  }
</style>
