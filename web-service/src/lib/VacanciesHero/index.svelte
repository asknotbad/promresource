<script>
  import Button from '$lib/Button/index.svelte';
  import Scaling from './Scaling.svelte';

  export let vacanciesHeroData;
</script>

{#if vacanciesHeroData}
  <section>
    <div class="container">
      <div class="header">
        <div class="frame"></div>
        <h2>
          {vacanciesHeroData.header}
        </h2>
        <div class="button">
          <Button bind:button={vacanciesHeroData.button} bind:dataForModal={vacanciesHeroData} />
        </div>
      </div>
      <div class="cover">
        <img src={vacanciesHeroData.cover.file.url} alt={vacanciesHeroData.cover.alt}>
      </div>
    </div>
  </section>
  <Scaling bind:vacanciesHeroData />
{/if}

<style>
  section {
    position: relative;
    padding-top: 60px;
    overflow: hidden;
    z-index: 1;
  }
  .header {
    position: relative;
    color: #fff;
    background: #363433;
    padding: 30px 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .header::before,
  .header::after {
    content: '';
    display: block;
    width: 100vw;
    height: calc(100% + 30px);
    position: absolute;
    z-index: -1;
    top: 0;
    background: #363433;
  }
  .header::before {
    right: 50%;
  }
  .frame {
    position: absolute;
    top: -30px;
    left: 0;
    width: 100vw;
    height: 246px;
    border: 2px solid #E52B32;
    z-index: -2;
  }
  h2 {
    font-size: 40px;
    line-height: 47px;
    max-width: 470px;
  }
  .cover {
    z-index: 1;
  }
  .button {
    max-width: 480px;
    margin-right: auto;
  }
  .button > :global(*) {
    pointer-events: all;
  }

  @media (min-width: 768px) {
    section {
      padding-top: 100px;
    }
    .header {
      gap: 40px;
      padding: 60px 0 40px 0;
    }
    .header::before,
    .header::after {
      height: calc(100% + 55px);
    }
    .frame {
      top: -40px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding-top: 130px;
    }
    .header {
      padding: 77px 0;
    }
    .header::before,
    .header::after {
      height: 100%;
    }
    .container {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 30px;
    }
    .frame {
      top: -50px;
    }
    .cover {
      margin-top: -130px;
      position: relative;
    }
    img {
      max-width: none;
      width: 61vw;
      position: absolute;
      left: -30px;
      top: 0;
    }
  }

  @media (min-width: 1200px) {
    section {
      padding-bottom: 75px;
    }
    .header {
      padding: 80px 0 80px 40px;
    }
    .frame {
      left: 70px;
    }
    img {
      width: 60vw;
    }
  }
</style>
