<script>
  import Button from '$lib/Button/index.svelte';

  export let acceptanceHeroData;
</script>

{#if acceptanceHeroData}
  <section>
    <img src={acceptanceHeroData.bg.file.url} alt={acceptanceHeroData.bg.alt}>
    <div class="overlay" style="background: {acceptanceHeroData.bg.overlay};"></div>
    <div class="container">
      <h2>
        {acceptanceHeroData.header}
      </h2>
      <div class="content">
        {@html acceptanceHeroData.content}
      </div>
      <ul>
        {#each acceptanceHeroData.items as item}
          {#if item.isActive === true}
            <li>
              {@html item.content}
            </li>
          {/if}
        {/each}
      </ul>
      <div class="bottom-text">
        {@html acceptanceHeroData.bottomText}
      </div>
      <div class="button">
        <Button bind:button={acceptanceHeroData.button} />
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    position: relative;
    z-index: 1;
    padding: 30px 0;
    color: #fff;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
  }
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  h2 {
    font-size: 25px;
  }
  .content {
    font-size: 16px;
    line-height: 19px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr;
    background: #363433;
    position: relative;
    z-index: 1;
  }
  ul::before,
  ul::after {
    content:'';
    display: block;
    width: 50vw;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    background: #363433;
  }
  ul::before {
    right: 50%;
  }
  ul::after {
    left: 50%;
  }
  li {
    border-bottom: 1px solid #E52B32;
    min-height: 80px;
    padding: 0 10px;
    display: grid;
    gap: 19px;
    grid-template-columns: 1fr;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
  }
  .bottom-text {
    background: #363433;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
    position: relative;
    z-index: 1;
  }
  .bottom-text::before,
  .bottom-text::after {
    content:'';
    display: block;
    width: 50vw;
    height: calc(100% + 60px);
    position: absolute;
    top: -30px;
    z-index: -1;
    background: #363433;
  }
  .bottom-text::before {
    right: 50%;
  }
  .bottom-text::after {
    left: 50%;
  }
  .button {
    position: relative;
    z-index: 1;
  }
  .button::before,
  .button::after {
    content:'';
    display: block;
    width: 50vw;
    height: calc(100% + 30px);
    position: absolute;
    top: 0;
    z-index: -1;
    background: #363433;
  }
  .button::before {
    right: 50%;
  }
  .button::after {
    left: 50%;
  }

</style>
