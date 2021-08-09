<script>
  import { formatPhoneLink, formatPhone } from '$lib/helpers';
  export let navIsOpen;
  export let contacts;
</script>

<div class="contacts" class:open={navIsOpen}>
  <div class="icon">
    {#if contacts.icon.url && contacts.icon.url !== ''}
      <img src={contacts.icon.url} alt="">
    {/if}
  </div>
  <div class="phone">
    <a href="tel:{formatPhoneLink(contacts.phone)}">
      {formatPhone(contacts.phone)}
    </a>
  </div>
  <div class="email">
    <a href="mailto:{contacts.email}">
      {contacts.email}
    </a>
  </div>
</div>

<style>
  .contacts {
    grid-column: span 4;
    justify-self: center;
    display: grid;
    max-height: 0;
    margin: 0;
    padding: 0 8px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 32px 1fr;
    grid-template-rows: 1fr 1fr;
    background: #2C14B2;
    column-gap: 20px;
    row-gap: 15px;
    transition: .25s ease-in-out;
    white-space: nowrap;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
  .contacts.open {
    padding: 8px;
    max-height: none;
    min-height: 100px;
  }
  .icon {
    grid-row: span 2;
    align-self: center;
    min-height: 32px;
  }
  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    object-position: center;
  }
  .phone {
    align-self: end;
  }
  .email {
    align-self: start;
    grid-column: 2 / 3;
  }

  @media (min-width: 576px) {
    .contacts {
      grid-column: 3 / 6;
      grid-row: 1 / 2;
      padding: 8px;
      align-items: center;
      max-height: none;
      justify-self: end;
      min-height: 100px;
    }
  }
</style>
