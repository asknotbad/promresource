<script>
  export let companyDetailsData;
</script>

{#if companyDetailsData}
  <section>
    <div class="container">
      <h2>
        {companyDetailsData.header}
      </h2>
      <ul>
        {#each companyDetailsData.items as item}
          {#if item.isActive === true}
            <li>
              {#if item.type === 'name'}
                <b>
                  {item.header}
                </b>
              {:else if item.type === 'colon'}
                <b>{item.header}</b>: {item.content}
              {:else if item.type === 'dash'}
                <b>{item.header}</b> — {item.content}
              {/if}
            </li>
          {/if}
        {/each}
      </ul>
      <div class="photo">
        <img src={companyDetailsData.photo.file.url} alt={companyDetailsData.photo.alt}>
      </div>
      <div class="content">
        <div class="quote">
          {@html companyDetailsData.quote}
        </div>
        <div class="signature">
          {companyDetailsData.signature}
        </div>
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    position: relative;
    z-index: 1;
    overflow-x: hidden;
  }
  h2 {
    position: relative;
    z-index: 1;
    color: #fff;
    padding: 47px 0;
    background: #363433;
    margin-bottom: 30px;
  }
  h2::before,
  h2::after {
    content: '';
    display: block;
    background: #363433;
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
  }
  h2::before {
    right: 50%;
  }
  h2::after {
    left: 50%;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 21px;
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 30px;
  }
  .photo {
    margin-bottom: -20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  img {
    width: 100%;
    max-width: 454px;
  }
  .content {
    position: relative;
    z-index: 1;
    padding: 20px 0;
    color: #fff;
    background: #2C14B2;
    display: grid;
    grid-template-columns: 1fr;
    font-size: 14px;
    line-height: 16px;
    gap: 16px;
  }
  .content::before,
  .content::after {
    background: #2C14B2;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100%;
    z-index: -1;
  }
  .content::before {
    right: 50%;
  }
  .content:after {
    left: 50%;
  }
  .quote {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .signature {
    font-weight: 700;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    h2 {
      padding: 60px 0;
      margin-bottom: 40px;
    }
    ul {
      line-height: 19px;
      gap: 19px;
      margin-bottom: 40px;
    }
    .photo {
      margin-bottom: -90px;
    }
    .content {
      padding: 30px;
      font-size: 18px;
      line-height: 21px;
      gap: 21px;
    }
    .content::before,
    .content::after {
      display: none;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    ul {
      grid-column: 1 / 2;
      grid-row: span 4;
      padding-right: 80px;
    }
    .photo {
      grid-column: 2 / 3;
      grid-row: span 2;
      margin-top: -130px;
      margin-bottom: -70px;
      z-index: 1;
    }
    img {
      max-width: 443px;
      object-fit: cover;
      object-position: center;
    }
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 30px;
      align-items: start;
      align-content: start;
    }
    .content {
      grid-column: 2 / 3;
    }
  }
</style>
