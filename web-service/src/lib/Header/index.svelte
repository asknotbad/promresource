<script>
  import Logo from './Logo.svelte';
  import Nav from './Nav.svelte';
  import Contacts from './Contacts.svelte';
  import Burger from './Burger.svelte';

  export let transparent = false;

  let navIsOpen;
</script>

<header>
  <div class="container" class:transparent>
    <Logo />
    <Burger bind:navIsOpen />
    <Nav bind:navIsOpen />
    <Contacts bind:navIsOpen />
  </div>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    background: #363433;
    padding: 30px 0;
    color: #fff;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
  }
</style>
