<script>
  import Logo from './Logo.svelte';
  import NavList from './NavList.svelte';
  import Contacts from './Contacts.svelte';

  export let footerData;
</script>

<footer>
  {#if footerData}
    <div class="container">
      <Logo bind:logo={footerData.logo} />
      {#each footerData.navLists as navList}
        <NavList bind:navList />
      {/each}
      <Contacts bind:contacts={footerData.contacts} />
    </div>
  {/if}
</footer>

<style>
  footer {
    position: sticky;
    top: 100%;
    color: #fff;
    background: #363433;
    padding: 40px 0 50px 0;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (min-width: 576px) {
    .container {
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }
  }

  @media (min-width: 768px) {
    .container {
      grid-template-columns: 5fr min-content 4fr;
      row-gap: 30px;
      column-gap: 50px;
    }
  }

  @media (min-width: 992px) {
    .container {
      grid-template-columns: min-content min-content min-content 1fr;
    }
  }

  @media (min-width: 1200px) {
    footer {
      padding: 60px 0;
    }
    .container {
      grid-template-columns: min-content min-content min-content 1fr min-content;
    }
  }
</style>
