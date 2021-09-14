<script>
  import arrow from './arrow-red.svg';

  export let realizationCompanyData;
</script>

{#if realizationCompanyData}
  <section>
    <div class="container">
      <h2>
        {realizationCompanyData.header}
      </h2>
      <div class="video">
        {@html realizationCompanyData.video}
      </div>
      <div class="content">
        {@html realizationCompanyData.content}
      </div>
      <div class="more">
        <a href={realizationCompanyData.link.url}>
          {realizationCompanyData.link.text} <img src={realizationCompanyData.link.icon.url} alt={realizationCompanyData.link.icon.alt}>
        </a>
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 0 0 60px 0;
    overflow-x: hidden;
    z-index: 1;
    position: relative;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    color: #424242;
  }
  h2 {
    position: relative;
    z-index: 1;
    padding: 32px 0;
    color: #fff;
    background: #363433;
  }
  h2::before {
    content: '';
    display: block;
    width: 100vw;
    height: 100%;
    position: absolute;
    right: -15px;
    top: 0;
    background: #363433;
    z-index: -1;
  }
  .video > :global(*) {
    width: 100%;
    height: 280px;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 16px;
    line-height: 19px;
    gap: 20px;
  }
  .content :global(ul),
  .content :global(li) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
  }
  .content :global(ul li::before) {
    content: '—';
    width: auto;
    display: contents;
    margin-right: 6px;
  }
  .more a {
    border: none;
    background: none;
    cursor: pointer;
    margin: 0 auto 0 0;
    padding: 0;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #E52B32;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  .more a img {
    margin-left: 8px;
    width: 32px;
    object-fit: contain;
    object-position: center;
  }

  @media (min-width: 576px) {
    h2::before,
    h2::after {
      content: '';
      display: block;
      width: 100vw;
      height: 100%;
      position: absolute;
      top: 0;
      background: #363433;
      z-index: -1;
    }
    h2::before {
      right: 50%;
    }
    h2::after {
      left: 50%;
    }
  }

  @media (min-width: 768px) {
    section {
      padding: 0 0 80px 0;
    }
    .video > :global(*) {
      height: 375px;
    }
  }

  @media (min-width: 992px) {
    .container {
      grid-template-columns: 1fr 1fr;
      row-gap: 40px;
    }
    h2::before {
      display: none;
    }
    h2::after {
      left: -30px;
    }
    .video {
      grid-row: 1 / 4;
    }
    .video > :global(*) {
      height: 100%;
    }
  }
</style>
