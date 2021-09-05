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
      <img src={item.photo.file.url} alt={item.photo.alt}>
      <h3>
        {item.name}
      </h3>
      {#if item.position}
        <div class="position">
          {item.position}
        </div>
      {/if}
      {#if item.phone && item.phone !== ''}
        <h4 class="phone-header">
          Номер телефона для связи:
        </h4>
        <div class="phone">
          {item.phone}
        </div>
      {/if}
      {#if item.email && item.email !== ''}
        <h4 class="email-header">
          Адрес электронной почты для связи:
        </h4>
        <div class="email">
          {item.email}
        </div>
      {/if}
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
  img {
    width: 100%;
    margin-bottom: 20px;
  }
  h3,
  h4 {
    font-size: 16px;
    line-height: 19px;
    padding: 0 20px 0 15px;
  }
  .position,
  .phone,
  .email {
    padding: 0 20px 0 15px;
  }
  .phone-header,
  .email-header {
    margin-top: 19px;
  }
</style>
