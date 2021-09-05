<script>
  export let vacanciesHeroData;
</script>

{#if vacanciesHeroData}
  <section>
    <div class="container">
      <h3>
        {@html vacanciesHeroData.subheader}
      </h3>
      <div class="content">
        {@html vacanciesHeroData.content}
      </div>
      <div class="counters">
        {#if vacanciesHeroData.counters && vacanciesHeroData.counters.length > 0}
          <ul class="counters__list">
            {#each vacanciesHeroData.counters as counter}
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
    padding: 60px 0;
  }
  h3 {
    font-size: 30px;
    line-height: 41px;
    margin-bottom: 30px;
  }
  h3 :global(span) {
    color: #2C14B2;
  }
  .content {
    font-size: 16px;
    line-height: 19px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
    margin-bottom: 30px;
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
    h3 {
      margin-bottom: 40px;
      font-size: 35px;
      line-height: 41px;
    }
    .content {
      margin-bottom: 40px;
    }
    .counter {
      padding: 24px 30px 20px 30px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    h3 {
      margin-bottom: 60px;
    }
    .content {
      margin-bottom: 60px;
    }
    .counter {
      width: calc(100% / 4);
    }
  }

</style>
