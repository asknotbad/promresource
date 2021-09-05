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
</style>
