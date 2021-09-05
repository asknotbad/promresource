<script>
  export let organizationOfWorkData;
</script>

{#if organizationOfWorkData}
  <section>
    <div class="container">
      <h2>
        {organizationOfWorkData.header}
      </h2>
      <ul>
        {#each organizationOfWorkData.items as item}
          {#if item.isActive === true}
            <li>
              <img src={item.icon.file.url} alt={item.icon.alt}>
              <div class="content">
                {@html item.content}
              </div>
            </li>
          {/if}
        {/each}
      </ul>
      <div class="director">
        <img class="photo" src={organizationOfWorkData.photo.file.url} alt={organizationOfWorkData.photo.alt}>
        <div class="signature">
          {organizationOfWorkData.signature}
        </div>
        <div class="quote">
          {@html organizationOfWorkData.quote}
        </div>
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    color: #fff;
    background: #363433;
    overflow-x: hidden;
    position: relative;
    z-index: 1;
  }
  h2 {
    margin-bottom: 30px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-bottom: 30px;
  }
  li {
    display: grid;
    grid-template-columns: 50px 1fr;
    gap: 20px;
    padding: 20px;
    min-height: 140px;
    align-content: center;
    align-items: center;
    border: 1px solid #FFFFFF;
    width: 100%;
    font-size: 16px;
    line-height: 19px;
  }
  li img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    object-position: center;
  }
  .content {
    font-size: 16px;
    line-height: 19px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
  }
  .director {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .photo {
    width: 100%;
  }
  .signature {
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: #E52B32;
    align-self: center;
  }
  .quote {
    grid-column: span 2;
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
    font-size: 16px;
    line-height: 19px;
    color: #F2F2F2;
  }

  @media (min-width: 576px) {
    ul {
      margin-bottom: 0;
    }
    li {
      width: 50%;
    }
    li:last-child {
      margin-bottom: -50px;
    }
    .director {
      column-gap: 30px;
    }
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    h2 {
      margin-bottom: 40px;
    }
    li {
      font-size: 20px;
      line-height: 23px;
    }
    li:last-child {
      margin-bottom: -70px;
    }
    .director {
      column-gap: 40px;
      align-items: end;
      grid-template-columns: 5fr 6fr;
    }
    .photo {
      grid-row: span 2;
    }
    .quote {
      margin-top: 100px;
      grid-row: 1 / 2;
      grid-column: 2 / 3;
      align-self: end;
    }
    .signature {
      align-self: end;
      font-size: 20px;
      line-height: 26px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    h2 {
      margin-bottom: 60px;
    }
    ul {
      padding-bottom: 40px;
    }
    li {
      width: calc(100% / 3);
    }
    li:last-child {
      margin-bottom: 0;
    }
    .director {
      margin: 70px 0;
      grid-template-columns: 1fr 2fr;
      align-items: center;
      align-content: center;
      position: relative;
      z-index: 1;
      row-gap: 30px;
      min-height: 220px;
  }
    .director::after {
      content: '';
      display: block;
      width: 100vw;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      background: #fff;
    }
    .photo {
      margin: -70px 0;
    }
    .quote {
      margin: 0;
      color: #363433;
      margin-top: auto;
    }
    .signature {
      margin-bottom: auto;
    }
  }
</style>
