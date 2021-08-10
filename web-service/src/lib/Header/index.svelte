<script>
  import Logo from './Logo.svelte';
  import Nav from './Nav.svelte';
  import Contacts from './Contacts.svelte';
  import Burger from './Burger.svelte';

  export let transparent = false;
  export let headerData;

  let navIsOpen;
</script>

<header>
  <div class="container" class:transparent>
    <Logo bind:logo={headerData.logo} />
    <Burger bind:navIsOpen />
    <Nav bind:navIsOpen bind:links={headerData.links} />
    <Contacts bind:navIsOpen bind:contacts={headerData.contacts} />
  </div>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    background: #363433;
    padding: 30px 0;
    color: #fff;
    z-index: 100;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
  }

  @media (min-width: 576px) {
    header {
      padding: 0;
    }
    .container {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr min-content;
      column-gap: 45px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      grid-template-columns: min-content 1fr min-content;
      column-gap: 40px;
    }
  }

</style>
