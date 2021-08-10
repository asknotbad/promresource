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
  }
</style>
