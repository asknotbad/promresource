<script>
  import Button from '$lib/Button/index.svelte';

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
          <Button bind:button={vacanciesHeroData.button} />
        </div>
      </div>
      <div class="cover">
        <img src={vacanciesHeroData.cover.file.url} alt={vacanciesHeroData.cover.alt}>
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    position: relative;
    z-index: 1;
    padding-top: 60px;
    overflow-x: hidden;
  }
  .header {
    position: relative;
    z-index: -1;
    color: #fff;
    background: #363433;
    padding: 30px 0 60px 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .header::before,
  .header::after {
    content: '';
    display: block;
    width: 100vw;
    height: calc(100%);
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
    width: 548px;
    height: 246px;
    border: 2px solid #E52B32;
    z-index: -2;
  }
  h2 {
    font-size: 40px;
    line-height: 47px;
  }
  .cover {
    margin-top: -30px;
    z-index: 1;
  }
</style>
