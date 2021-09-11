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
        <Button bind:button={acceptanceHeroData.button} bind:dataForModal={acceptanceHeroData} />
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
    max-width: 100%;
    /* overflow-x: hidden; */
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
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
    max-width: 100%;
    width: 100%;
    margin-right: auto;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr;
    background: #363433;
    position: relative;
    z-index: 1;
  }
  ul::before {
    content:'';
    display: block;
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    background: #363433;
    right: -15px;
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
  .bottom-text::before {
    content:'';
    display: block;
    width: 100vw;
    height: calc(100% + 60px);
    position: absolute;
    top: -30px;
    z-index: -1;
    background: #363433;
    right: -15px;
  }
  .button {
    position: relative;
    z-index: 1;
    margin-right: auto;
    width: 100%;
    max-width: 100%;
  }
  .button > :global(*) {
    width: 100%;
    max-width: 379px;
    margin-right: auto;
  }
  .button::before {
    content:'';
    display: block;
    width: 100vw;
    height: calc(100% + 30px);
    position: absolute;
    top: 0;
    right: -15px;
    z-index: -1;
    background: #363433;
  }

  @media (min-width: 576px) {
    img,
    .overlay {
      height: calc(100% - 320px);
    }
    ul {
      grid-template-columns: 1fr 1fr;
      row-gap: 30px;
      padding-top: 17px;
      padding-bottom: 17px;
      padding-right: 50px;
    }
    ul::before {
      width: 200vw;
      right: 0;
    }
    li {
      border-bottom: none;
    }
    li:nth-of-type(odd) {
      border-right: 1px solid #E52B32;
      padding-right: 20px;
      padding-left: 0;
    }
    li:nth-of-type(even) {
      padding-left: 20px;
      padding-right: 0;
    }
    .bottom-text {
      padding-right: 50px;
    }
    .bottom-text::before {
      width: 200vw;
      right: 0;
    }
    .bottom-text::after {
      display: none;
    }
    .button::before {
      width: 200vw;
      right: 0;
    }
  }

  @media (min-width: 768px) {
    img,
    .overlay {
      height: calc(100% - 350px);
    }
    section {
      padding-top: 60px;
      padding-bottom: 40px;
    }
    .container {
      gap: 40px;
    }
    h2 {
      font-size: 60px;
      line-height: 70px;
    }
    ul {
      width: 615px;
    }
    li {
      font-size: 18px;
      line-height: 21px;
      gap: 21px;
    }
    .content {
      width: 615px;
      font-size: 20px;
      line-height: 23px;
    }
    .bottom-text {
      width: 615px;
      font-size: 18px;
      line-height: 21px;
      gap: 21px;
    }
    .bottom-text::before {
      height: calc(100% + 80px);
      top: -40px;
    }
    .button {
      width: 615px;
    }
    .button::before {
      height: calc(100% + 40px);
    }
  }

  @media (min-width: 992px) {
    img,
    .overlay {
      height: calc(100% - 120px);
    }
    section {
      padding-top: 100px;
    }
    h2 {
      font-size: 60px;
      line-height: 70px;
      max-width: 951px;
      grid-column: span 2;
    }
    .container {
      grid-template-columns: 7fr 5fr;
      column-gap: 30px;
    }
    .content {
      margin-bottom: 60px;
      width: 100%;
      max-width: 723px;
      font-size: 20px;
      line-height: 23px;
      gap: 23px;
      grid-column: span 2;
      max-width: 723px;
    }
    ul {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      width: 100%;
      grid-column: span 2;
      padding-right: 0;
      margin-bottom: -20px;
    }
    li {
      font-size: 18px;
      line-height: 21px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    li:not(:last-child) {
      border-right: 1px solid #E52B32;
      padding-right: 20px;
    }
    li:not(:first-child) {
      padding-left: 20px;
    }
    .bottom-text {
      width: 100%;
      margin-right: 0;
    }
    .button {
      width: 100%;
      margin-right: 0;
      padding-right: 30px;
    }
    .button::before {
      height: calc(100% + 80px);
      top: -40px;
      width: calc(100% + 35px);
    }
  }
</style>
