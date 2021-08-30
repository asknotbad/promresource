<script>
  import { formatPhoneLink, formatPhone } from '$lib/helpers';

  export let contactsData;
</script>

{#if contactsData}
  <section>
    <div class="container">
      <h2>
        {contactsData.header}
      </h2>
      <ul>
        {#each contactsData.items as item}
          <li>
            <article>
              <div class="icon">
                <img src={item.icon.file.url} alt={item.icon.alt}>
              </div>
              <h3>
                {item.header}
              </h3>
              <div class="content">
                {#if item.type === 'phone'}
                  <a href="tel:{formatPhoneLink(item.content)}">
                    {formatPhone(item.content)}
                  </a>
                {:else if item.type === 'email'}
                  <a href="mailto:{item.content}">
                    {item.content}
                  </a>
                {:else if item.type === 'address'}
                  {item.content}
                {/if}
              </div>
            </article>
          </li>
        {/each}
        <li class="hours">
          {@html contactsData.workHours}
        </li>
      </ul>
      <div class="map">
        {@html contactsData.map}
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    position: relative;
    z-index: 1;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  h2 {
    color: #fff;
    position: relative;
    z-index: 1;
    background: #363433;
    padding: 30px 0;
  }
  h2::before,
  h2::after {
    content: '';
    width: 50vw;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    background: #363433;
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
    gap: 20px;
  }
  article {
    display: grid;
    grid-template-columns: 70px 1fr;
    row-gap: 7px;
    column-gap: 25px;
    align-items: center;
  }
  .icon {
    height: 70px;
    background: #363433;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: span 2;
  }
  .icon img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    object-position: center;
  }
  h3 {
    font-size: 22px;
    line-height: 26px;
    margin-top: auto;
  }
  .content {
    font-size: 18px;
    line-height: 20px;
    margin-bottom: auto;
  }
  .hours {
    padding-left: 95px;
    font-size: 20px;
    line-height: 23px;
  }
  .hours :global(b) {
    font-size: 25px;
    line-height: 29px;
    margin-bottom: 7px;
  }
  .map {
    margin: 0 -15px;
    height: 210px;
  }

  @media (min-width: 576px) {
    h3 {
      font-size: 25px;
      line-height: 29px;
    }
    .content {
      font-size: 20px;
      line-height: 23px;
    }
    .map {
      margin: 0;
      height: 400px;
    }
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    h2::after {
      left: auto;
      right: -30px;
    }
    .container {
      grid-template-columns: 5fr 7fr;
      row-gap: 40px;
    }
    h3 {
      font-size: 18px;
      line-height: 29px;
    }
    .content {
      font-size: 16px;
      line-height: 20px;
    }
    .map {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      height: 100%;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    h3 {
      font-size: 25px;
      line-height: 29px;
    }
    .content {
      font-size: 20px;
      line-height: 23px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      grid-template-columns: 1fr 2fr;
    }
  }
</style>
