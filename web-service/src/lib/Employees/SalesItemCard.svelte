<script>
  export let item;
</script>

{#if item}
  <article>
    <div class="photo">
      <img src={item.photo.file.url} alt={item.photo.alt}>
    </div>
    <div class="content">
      <div class="name">
        <h3>
          {item.name}
        </h3>
        {#if item.position && item.position !== ''}
          <div class="position">
            {item.position}
          </div>
        {/if}
      </div>
      {#if item.phone && item.phone !== ''}
        <div class="phone">
          <h4>
            Номер телефона для связи:
          </h4>
          <div class="phone">
            {item.phone}
          </div>
        </div>
      {/if}
      {#if item.email && item.email !== ''}
        <div class="email">
          <h4>
            Адрес электронной почты для связи:
          </h4>
          <div class="email">
            {item.email}
          </div>
        </div>
      {/if}
    </div>
  </article>
{/if}

<style>
  article {
    border: 1px solid #363433;
    word-break: break-word;
  }
  img {
    width: 100%;
  }
  .content {
    font-size: 16px;
    line-height: 19px;
    padding: 20px 16px 24px 16px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 19px;
  }
  h3,
  h4 {
    font-size: 16px;
    line-height: 19px;
  }
  .phone > *,
  .email > * {
    display: inline-block;
  }

  @media (min-width: 768px) {
    .photo {
      height: 228px;
    }
    img {
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  @media (min-width: 992px) {
    .content {
      padding: 30px 25px;
    }
  }

</style>
