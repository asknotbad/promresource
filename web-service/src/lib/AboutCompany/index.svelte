<script>
  export let aboutCompanyData;
</script>

{#if aboutCompanyData}
  <section>
    <div class="container">
      <h2>
        {aboutCompanyData.header}
      </h2>
      <div class="content">
        {@html aboutCompanyData.content}
      </div>
      <div class="accent">
        {#if aboutCompanyData.accent}
          <div class="accent__content">
            {@html aboutCompanyData.accent.content}
          </div>
          {#if aboutCompanyData.accent.listItems && aboutCompanyData.accent.listItems.length > 0}
            <ul class="accent__list">
              {#each aboutCompanyData.accent.listItems as item}
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
      <div class="link">
        {#if aboutCompanyData.accent.link && aboutCompanyData.accent.link.isActive === true}
          <a class="accent-link" href={aboutCompanyData.accent.link.url}>
            {aboutCompanyData.accent.link.text} <img src={aboutCompanyData.accent.link.icon.url} alt="">
          </a>
        {/if}
      </div>
      <div class="cover">
        {#if aboutCompanyData.cover}
          <img src={aboutCompanyData.cover.file.url} alt={aboutCompanyData.cover.alt}>
          {#if aboutCompanyData.cover.overlay && aboutCompanyData.cover.overlay !== ''}
            <div class="overlay" style="background: {aboutCompanyData.cover.overlay};"></div>
          {/if}
        {/if}
      </div>
      <div class="counters">
        {#if aboutCompanyData.counters && aboutCompanyData.counters.length > 0}
          <ul class="counters__list">
            {#each aboutCompanyData.counters as counter}
              {#if counter.isActive === true}
                <li class="counter">
                  <div class="counter__value">
                    {counter.value}
                  </div>
                  <div class="counter__text">
                    {counter.text}
                  </div>
                </li>
              {/if}
            {/each}
          </ul>
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
  .accent__content {
    max-width: 200px;
    margin-right: auto;
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
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    text-align: center;
  }
  .accent-link {
    display: grid;
    grid-template-columns: min-content 32px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #E52B32;
  }
  .accent-link img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    object-position: right center;
  }
  .cover {
    margin: 0 -15px;
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
  .counters__list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }
  .counter {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid #363433;
    padding: 24px 55px 20px 55px;
  }
  .counter__value {
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    color: #E52B32;
  }
  .counter__text {
    font-size: 16px;
    line-height: 19px;
  }

  @media (min-width: 576px) {
    .link {
      justify-content: flex-start;
    }
    .cover {
      margin: 0;
    }
    .counters__list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    .counter {
      width: 50%;
    }
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
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
    .counters {
      grid-column: span 2;
    }
    .counter {
      width: calc(100% / 3);
      padding: 24px 30px 20px 30px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
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
    .counter {
      width: calc(100% / 5);
    }
  }

</style>
