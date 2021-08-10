<script>
  import { formatPhoneLink, formatPhone } from '$lib/helpers';

  export let contacts;
</script>

{#if contacts}
  <ul>
    <li>
      <a href="tel:{formatPhoneLink(contacts.phone)}">
        {formatPhone(contacts.phone)}
      </a>
    </li>
    <li>
      <a href="mailto:{contacts.email}">
        {contacts.email}
      </a>
    </li>
  </ul>
{/if}

<style>
  ul {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    margin-top: 15px;
    white-space: nowrap;
  }

  @media (min-width: 576px) {
    ul {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      margin-top: 0;
      font-weight: 400;
    }
  }

  @media (min-width: 768px) {
    ul {
      grid-column: 1 / 2;
      grid-row: 2 / 5;
      align-content: start;
    }
  }

  @media (min-width: 1200px) {
    ul {
      grid-column: 5 / 6;
      grid-row: auto;
    }
  }
</style>
