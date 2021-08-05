<script>
  import Logo from './Logo.svelte';
  import Nav from './Nav.svelte';
  import Contacts from './Contacts.svelte';
  import Burger from './Burger.svelte';

  export let transparent = false;
  export let headerData = {
    logo: {
      text: 'Logo',
      img: {
        url: '',
      },
    },
    links: [
      {
        order: 1,
        icon: {
          url: '',
        },
        url: '/',
        text: 'text',
        isExternal: false,
        isActive: true,
      }
    ],
    contacts: {
      icon: {
        url: '',
      },
      phone: '8 8422 36-05-10',
      email: 'info@promresurs-ul.ru',
    }
  };

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
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
  }
</style>
