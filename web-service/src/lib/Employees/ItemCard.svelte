<script>
  export let item;
  export let header;
</script>

{#if item}
  <div class="wrapper">
    {#if header && header !== ''}
      <h2>
        {header}
      </h2>
    {/if}
    <article>
      <div class="photo">
        <img src={item.photo.file.url} alt={item.photo.alt}>
      </div>
      <div class="content">
        <div class="name">
          <h3>
            {item.name}
          </h3>
          {#if item.position}
            <div class="position">
              {item.position}
            </div>
          {/if}
        </div>
        {#if item.phone && item.phone !== ''}
          <div class="phone">
            <h4 class="phone-header">
              Номер телефона для связи:
            </h4>
            <div class="phone">
              {item.phone}
            </div>
          </div>
        {/if}
        {#if item.email && item.email !== ''}
          <div class="email">
            <h4 class="email-header">
              Адрес электронной почты для связи:
            </h4>
            <div class="email">
              {item.email}
            </div>
          </div>
        {/if}
      </div>
    </article>
  </div>
{/if}

<style>
  article {
    border: 1px solid #FFFFFF;
    display: grid;
    grid-template-columns: 1fr;
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 30px;
  }
  h2 {
    margin-bottom: 30px;
  }
  .photo {
    margin-bottom: 20px;
  }
  img {
    width: 100%;
  }
  h3,
  h4 {
    font-size: 16px;
    line-height: 19px;
  }
  .content {
    padding: 0 20px 0 15px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
    align-content: center;
    align-items: center;
  }
  @media (min-width: 576px) {
    article {
      grid-template-columns: 5fr 9fr;
      column-gap: 35px;
      padding-bottom: 0;
      min-height: 223px;
    }
    .content {
      padding: 33px 30px 23px 0;
      align-content: center;
    }
    .photo {
      margin-bottom: 0;
      align-self: stretch;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    .wrapper:nth-of-type(even) article {
      grid-template-columns: 9fr 5fr;
    }
    .wrapper:nth-of-type(even) article {
      column-gap: 35px;
    }
    .wrapper:nth-of-type(even) .photo {
      grid-column: 2 / 3;
    }
    .wrapper:nth-of-type(even) .content {
      grid-row: 1 / 2;
      padding: 33px 0 23px 30px;
      text-align: right;
    }
  }

  @media (min-width: 768px) {
    h2 {
      margin-bottom: 40px;
    }
    .content {
      padding: 33px 68px 23px 0;
      align-content: center;
    }
    .wrapper:nth-of-type(even) .content {
      grid-row: 1 / 2;
      padding: 33px 63px 23px 30px;
      text-align: right;
    }
  }

  @media (min-width: 992px) {
    h2 {
      margin-bottom: 60px;
    }
    article {
      min-height: 280px;
    }
    article,
    .wrapper:nth-of-type(even) article {
      height: 100%;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
    }
    .content {
      padding: 33px 20px 23px 0;
      align-content: center;
    }
    .wrapper:nth-of-type(even) .content {
      padding: 33px 0 23px 20px;
      text-align: left;
    }
  }

</style>
