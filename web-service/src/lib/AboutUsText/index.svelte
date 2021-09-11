<script>
  import Button from '$lib/Button/index.svelte';

  export let aboutUsTextData;
</script>

{#if aboutUsTextData}
  <section>
    <div class="container">
      <h1>
        {aboutUsTextData.header}
      </h1>
      <div class="content">
        {@html aboutUsTextData.content}
      </div>
      <div class="button">
        <Button bind:button={aboutUsTextData.button} bind:dataForModal={aboutUsTextData} />
      </div>
      <div class="cover">
        <img src={aboutUsTextData.cover.file.url} alt={aboutUsTextData.cover.alt}>
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 30px 0 60px 0;
    position: relative;
    z-index: 1;
    overflow-x: hidden;
    color: #fff;
  }
  section::before {
    content: '';
    display: block;
    width: 100vw;
    height: calc(100% - 160px);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background: #363433;
  }
  .container {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  h1 {
    grid-column-start: 1;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
    font-size: 16px;
    line-height: 19px;
    grid-column-start: 1;
  }
  .button {
    grid-column-start: 1;
  }
  .cover {
    position: relative;
    z-index: 1;
    margin-bottom: 15px;
  }
  .cover::before {
    content: '';
    display: block;
    position: absolute;
    top: 15px;
    left: -15px;
    width: 100%;
    height: 100%;
    border: 2px solid #E52B32;
    z-index: -1;
    pointer-events: none;
  }
  img {
    width: 100%;
  }

  @media (min-width: 576px) {
    section {
      padding: 60px 0 80px 0;
    }
    section::before {
      height: calc(100% - 190px);
    }
    .button {
      display: flex;
    }
    .button > :global(*) {
      width: auto;
      min-width: 284px;
      margin-right: auto;
    }
    .cover {
      margin-bottom: 50px;
      padding-left: 30px;
    }
    .cover::before {
      top: 120px;
      left: 0;
      width: calc(100% - 60px);
      height: calc(100% - 70px);
    }
    img {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .content {
        font-size: 20px;
        line-height: 23px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 0 0 100px 0;
    }
    section::before {
      height: calc(100% - 100px);
      width: 50vw;
    }
    .container {
      padding-top: 90px;
      padding-bottom: 90px;
      grid-template-columns: 7fr 5fr;
    }
    .container::before {
      content: '';
      display: block;
      width: calc((100% / 12) * 10 - 15px);
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      background: #363433;
    }
    .cover {
      position: absolute;
      top: 0;
      left: calc((100% / 12) * 8 - 30px);
      width: calc((100% / 12) * 6 - 15px);
      padding-left: 0;
    }
    .cover::before {
      left: -43px;
      top: 122px;
      width: calc(100% - 94px);
    }
  }

  @media (min-width: 1200px) {
    .content {
      padding-right: 60px;
    }
    .cover {
      left: calc((100% / 12) * 8 - 30px);
      width: calc((100% / 12) * 7);
    }
  }
</style>
